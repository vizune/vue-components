<template>
    <section class="SearchResults">
        <header class="SearchResults-header">
            <div class="Container">
                <h1 class="SearchResults-title">{{heading}}</h1>
                <search-bar
                    :action="action"
                    :input="term"
                    @searchInput="searchTerm">
                </search-bar>
                <p class="SearchResults-info" v-if="total && term">
                    <span v-if="term === 1">{{ total }} result for '{{ term }}'</span>
                    <span v-else>{{ total }} results for '{{ term }}'</span>
                </p>
                <p class="SearchResults-info" v-if="total && !term">
                    <span>{{ total }} results in total across site</span>
                </p>
            </div>
        </header>
        <div class="SearchResults-main">
            <div class="Container">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8" 
                v-if="dataset && results">
                    <div class="lg:col-span-3">
                        <details class="SearchResults-details" v-bind:open="mobileAccordion">
                            <summary class="SearchResults-summary">
                                <h2 class="mt-0 SearchResults-summaryHeading">Filters</h2>
                            </summary>
                            <a href="#" v-on:click="resetFilters" v-bind:class="filtersActive">Reset</a>
                            <div v-if="data && data.AvailableTags">
                                <h3 style="font-size: 1rem;" class="mt-3">Content type</h3>
                                <div class="Checkbox-list">
                                    <div v-for="(tag, index) in data.AvailableTags" v-bind:key="index" class="Checkbox-item">
                                        <div class="Checkbox">
                                            <input class="Checkbox-control" 
                                            type="checkbox" 
                                            v-model="selectedChecks"
                                            v-bind:id="tag.Id"
                                            v-bind:value="tag.Id">
                                            <label class="Checkbox-check" v-bind:for="tag.Id"></label>
                                            <label class="Checkbox-label" v-bind:for="tag.Id">
                                                {{tag.Name}} ({{getTypeCount(tag.Id)}})
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div class="lg:col-span-9">
                        <div v-if="dataset && results">
                            <div class="PageCountFilter">
                                <span>Results per page</span>
                                <ul>
                                    <li v-for="count in pageCounts" v-bind:key="count">
                                        <button class="PageCountFilter-button"
                                        v-bind:class="{ 'is-active' : itemsPerPage === count }"
                                        v-on:click="changeCountFilter(count)"
                                        >{{count}}</button>
                                    </li>
                                </ul>
                            </div>

                            <div class="SearchResults-list">
                                <div v-for="(item, index) in feed.slice(pageSlice, count)" v-bind:key="index">
                                    <result-item :item="item"></result-item>
                                </div>
                            </div>
                        </div>
                        <div v-if="dataset && !results">
                            <div class="SearchResults-error">
                                <h2>{{error}}</h2>
                                <h3>Improve your search results by:</h3>
                                <ul>
                                    <li>removing filters</li>
                                    <li>double-checking your spelling</li>
                                    <li>using fewer keywords</li>
                                    <li>searching for something less specific</li>
                                </ul>

                                <h3>Are you searching for a person or business?</h3>
                                <p>You might need to use our <a href="#">register</a> for that.</p>
                            </div>
                        </div>
                        <div :key="itemsPerPage">
                            <pagination :items="pageItems" 
                            :pageSize="itemsPerPage" 
                            :maxPages="maxPages" 
                            @changePage="changePage" 
                            :disableDefaultStyles="true"></pagination>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p class="text-center my-4">
                        Please enter a search term
                    </p>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
import axios from 'axios';
import SearchBar from '../../forms/SearchBar/SearchBar.vue';
import ResultItems from './SearchResultsItem.vue';
//import SingleCheckbox from '../../forms/Checkbox/SingleCheckbox.vue';
import Pagination from '../../pagination/Pagination.vue';

export default {
    name: 'search-results',
    components: {
        "search-bar": SearchBar,
        //"single-checkbox": SingleCheckbox,
        "result-item": ResultItems,
        "pagination": Pagination
    },
    data() {
        return {
            data: null,
            heading: null,
            term: null,
            results: null,
            feed: null,
            total: null,
            itemsPerPage: 10,
            error: null,
            selectedChecks: [],
            feedCount: 0,
            maxPages: 3,
            pageCounts: [10, 25, 50],
            pageNum: 0,
            pageSlice: 0,
            pageFeed: null,
            mobileAccordion: false,
            timeout: false,
            pageItems: null,
            action: "/search",
        }
    },
    props: {
        'dataset' : {
			type: Object,
            required: true,
            default: []
		}
    },
    mounted() {
        this.queryString();
        
        if(this.term) {
            let search = this.searchTerm(this.term);
            this.fetchData(search);
        }
        else {
            this.fetchData(this.dataset.endpoint);
        }
        
        this.accordionCheck();

        window.addEventListener("resize", () => {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.accordionCheck();
                }, 300);
        })
    },
    watch: {
        selectedChecks: function() {
            // Search through result items
            // Find items that include the selected tag id
            // Re-populate feed array with items that only include tag match
            if(this.data && this.selectedChecks.length > 0) {
                let arr = [];

                this.results.map(result => {
                    let match = result.Tags.some(item => this.selectedChecks.includes(item.Id));

                    if(match) {
                        arr.push(result)
                    }
                })

                this.feed = arr;
                this.pageItems = arr;
                this.feedCount = this.feed.length;
            }
            else {
                if(this.results) {
                    this.feed = this.results;
                    this.pageItems = this.results;
                    this.feedCount = this.results.length;
                } 
            }
        },
        term: function (newTerm, oldTerm) {
            this.term = newTerm;
        }
    },
    computed: {
        filtersActive: function() {
            return this.selectedChecks.length ? "is-visible" : "is-hidden";
        }
    },
    methods: {
        fetchData(url) {
            axios.get(url)
                .then((resp) => {
                    if(resp.data) {
                        this.data = resp.data
                        this.heading = this.data.Heading;
                        this.term = this.data.SearchMeta.Term ? this.data.SearchMeta.Term : "";

                        // Always keep original results, does not change
                        this.results = this.data.Results;

                        // Will manipulate for search result items
                        this.feed = this.data.Results;

                        // Used for pagination component
                        this.pageItems = this.data.Results;

                        this.feedCount = this.results.length;
                        this.total = this.data.SearchMeta.TotalResults;
                        this.error = this.data.NoResultText;
                    }
                })
                .catch((err) => {
                    console.log(`Error : ${err}`)
                })
        },
        resetFilters: function(e) {
            e.preventDefault();
            this.selectedChecks = [];

            // Resets to original results
            this.feed = this.results;
            this.pageItems = this.results;
            this.feedCount = this.results.length;
        },
        changeCountFilter: function(number) {
            this.itemsPerPage = number;
        },
        getTypeCount: function(id) {
            let tags = [];

            // Gets all tag numbers from search results items
            this.results.forEach(result => {
                result.Tags.forEach(tag => {
                    tags.push(tag.Id)
                })
            })

            // Returns the number of tags that match the id we're looking for
            return tags.filter(x => x === id).length;
        },
        changePage: function(items) {
            // Used for pagination sub-component
            this.feed = items;
        },
        searchTerm: function(term) {
            // Gets cached this.term and searches with term applied
            if(this.term) {
                let newEndpoint = this.dataset.endpoint + "&term=" + this.term;
                return newEndpoint;
            }
        },
        accordionCheck: function() {
            // Turns the filters into an accordion for mobile
            let desktop = window.matchMedia("(min-width: 768px)").matches;
            this.mobileAccordion = desktop ? true : false;
        },
        queryString: function() {
            // Gets "term" from URL and caches it to this.term
            const params = new URLSearchParams(window.location.search);
            let term = params.get("term");

            this.term = term;
        }
    }
}
</script>

<style lang="scss" scoped>
.is-hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity .25s ease, visibility .25s step-end;
}

.is-visible {
    opacity: 1;
    visibility: visible;
    transition: opacity .25s ease, visibility .25s step-start;
}
</style>
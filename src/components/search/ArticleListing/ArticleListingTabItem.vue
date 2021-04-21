<template>
    <article 
    class="Tabs-item"
    v-bind:class="{ 'is-active' : active }"
    role="tabpanel" 
    :id="year + 'Tab'">
        <header>
            <h1 class="Tabs-itemTitle">{{year}} articles</h1>
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <p class="ArticleListing-info mt-0" v-if="total && year">
                    <span v-if="total === 1">{{ total }} article in the '{{ year }}' category</span>
                    <span v-else>{{ total }} articles in the '{{ year }}' category</span>
                </p>
                <div class="PageCountFilter">
                    <span>Articles per page</span>
                    <ul>
                        <li v-for="count in pageCounts" v-bind:key="count">
                            <button class="PageCountFilter-button"
                            v-bind:class="{ 'is-active' : itemsPerPage === count }"
                            v-on:click="changeCountFilter(count)"
                            >{{count}}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="ArticleListing-list">
            <div v-for="(item, index) in feed.slice(pageSlice, count)" 
            v-bind:key="index">                               
                <listing-item :item="item"></listing-item>
            </div>
        </div>
        <footer>
            <div :key="itemsPerPage">
                <pagination :items="pageItems" 
                :pageSize="itemsPerPage" 
                :maxPages="maxPages" 
                @changePage="changePage" 
                :disableDefaultStyles="true"></pagination>
            </div>
        </footer>
    </article>
</template>

<script>
import ListingItem from './ArticleListingItem.vue';
import Pagination from '../../pagination/Pagination.vue';

export default {
    data() {
        return {
            itemsPerPage: 10,
            feed: null,
            feedCount: 0,
            maxPages: 3,
            pageCounts: [10, 25, 50],
            pageNum: 0,
            pageSlice: 0,
            pageFeed: null,
            timeout: false,
            pageItems: null
        }
    },
    props: {
        year: {
            type: Number,
            required: true
        },
        articles: {
            type: Array,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    components: {
        "listing-item": ListingItem,
        Pagination
    },
    beforeMount() {
        // Vue rule: avoid mutating props (this.articles)
        this.feed = this.articles;

        // Used for pagination
        this.pageItems = this.articles;
    },
    methods: {
        changeCountFilter: function(number) {
            this.itemsPerPage = number;
        },
        changePage: function(items) {
            // Used for pagination sub-component
            this.feed = items;
        }
    }
}
</script>
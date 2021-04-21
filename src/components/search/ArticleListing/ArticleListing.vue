<template>
    <section class="ArticleListing">
        <div class="ArticleListing-main">
            <div class="Container">
                <div v-if="dataset && results">
                    <div v-if="dataset && results">
                        <tabs
                        :tabList="yearList"
                        :tabContent="articles" />
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
import axios from 'axios';
import Tabs from './ArticleListingTabs.vue';

export default {
    name: 'article-listing',
    components: {
        Tabs
    },
    data() {
        return {
            data: null,
            heading: null,
            category: null,
            results: null,
            feed: null,
            error: null,
            yearList: [],
            articles: []
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
        this.fetchData(this.dataset.endpoint);
    },
    methods: {
        fetchData(url) {
            axios.get(url)
                .then((resp) => {
                    if(resp.data) {
                        this.data = resp.data
                        //console.log(this.data)
                        this.heading = this.data.Heading;
                        this.category = this.data.SearchMeta.Category;
                        this.results = this.data.Results;

                        this.feedCount = this.results.length;
                        this.error = this.data.NoResultText;

                        this.createYearCategories();
                        this.createArticlesList();
                        this.populateArticleResults();
                    }
                })
                .catch((err) => {
                    console.log(`Error : ${err}`)
                })
        },
        createYearCategories: function() {
            // Need to separate articles in this.data.results into Objects by years

            this.data.Results.map(item => {
                // Collate all the years from articles into an array using PublishedDate

                let date = new Date(item.PublishedDate);
                let year = date.getFullYear();

                // Prevents duplicates & adds year to list
                // All entries being 2019 go into an Archive tab
                if(!this.yearList.includes(year)) {
                    if(year < 2019) {
                        if(!this.yearList.includes("Archive")) {
                            this.yearList.push("Archive")
                        }
                    }
                    else {
                        this.yearList.push(year)
                    }
                }
            })
        },
        createArticlesList: function() {
            // Populates an object with the years as objects inside
            // based to the yearList array items
            // we will be storing the articles by year in [year].results
            this.yearList.forEach(item => {
                if(item < 2019) {
                    if(!this.articles.some(item => item.year === "Archive")) {
                        this.articles.push({year: "Archive", results: []})
                    }
                }
                else {
                    this.articles.push({year: item, results: []})
                }
            })
        },
        populateArticleResults: function() {
            // Match this.data.results with matching year in this.articles
            this.data.Results.map(item => {
                let date = new Date(item.PublishedDate);
                let year = date.getFullYear();


                if(year < 2019) {
                    this.articles.find(item => item.year === "Archive")["results"].push(item)
                }
                else {
                    let match = this.articles.find(obj => {
                        if(obj.year === year) {
                            return obj
                        }
                    })

                    match.results.push(item)
                }
            })
        }
    }
}
</script>
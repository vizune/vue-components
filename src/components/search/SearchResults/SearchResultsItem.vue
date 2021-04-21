<template>
    <div class="SearchResults-item">
        <header class="SearchResults-itemHeader">
            <h3 v-if="item.Heading" class="SearchResults-itemTitle"><a :href="item.Url">{{item.Heading}}</a></h3>
            <span class="SearchResults-itemUrl" v-if="item.Url">{{item.Url}}</span>
        </header>
        <p v-if="item.Description">{{item.Description}}</p>
        <footer class="SearchResults-itemFooter" v-if="item.PublishedDate || item.LastUpdated">
            <span v-if="item.PublishedDate">Published on {{getItemDate}}</span>
            <span>Last updated at 15:22 on 24/02/2020</span>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'result-item',
    data() {
        return {
        }
    },
    props: {
        item: null
    },
    computed: {
        getItemDate: function() {
            return new Date(this.item.PublishedDate).toLocaleDateString();
        },
        getLastUpdatedDate: function() {
            return new Date(this.item.UpdatedDate).toLocaleDateString();
        },
        getLastUpdatedTime: function(){
            return new Date(this.item.UpdatedDate).toLocaleTimeString()
        }
    }
}
</script>
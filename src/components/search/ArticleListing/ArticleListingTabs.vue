<template>
    <div class="Tabs">
        <nav class="Tabs-nav" role="tablist">
            <a class="Tabs-navLink"
            v-for="(tab, index) in tabList"
            v-bind:key="index"
            href="#" 
            v-on:click="activeTab = index"
            v-bind:class="{ 'is-active' : activeTab === index }"
            :aria-controls="tabContent[index].year"
            :id="tab" 
            role="tab"
            v-html="tab" />
        </nav>
        
        <section class="Tabs-wrapper">
            <tab-item
            v-for="(item, index) in tabContent"
            v-bind:key="item.year"
            :tabId="item.year"
            :articles="item.results"
            :year="item.year"
            :total="item.results.length"
            :active="activeTab === index">
            </tab-item>
        </section>
    </div>
</template>

<script>
import TabItem from './ArticleListingTabItem.vue';

export default {
    data () {
        return {
            activeTab: 0
        }
    },
    props: {
        tabList: {
            type: Array,
            required: true
        },
        tabContent: {
            type: Array,
            required: true
        }
    },
    components: {
        TabItem
    }
}
</script>
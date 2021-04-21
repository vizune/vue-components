<template>
    <div class="Tabs">
        <nav class="Tabs-nav" role="tablist">
            <a class="Tabs-navLink"
            v-for="(tab, index) in tabList"
            v-bind:key="tab"
            href="#" 
            v-on:click.prevent="activeTab = index"
            v-bind:class="{ 'is-active' : activeTab === index }"
            :aria-controls="tabContent[0].id" 
            :id="tab" 
            role="tab"
            v-html="tab" />
        </nav>
        <section class="Tabs-content">
            <tab-item
            v-for="(item, index) in tabContent"
            v-bind:key="item.id"
            :tabId="item.id"
            :active="activeTab === index">
                {{item.content}}
            </tab-item>
        </section>
    </div>
</template>

<script>
import TabItem from './TabItem.vue';

export default {
    data () {
        return {
            activeTab: 0,
            tabList: [2021, 2020, 2019],
            tabContent: [
                {
                    "id": 2021,
                    "content": "Lorem ipsum 1"
                },
                {
                    "id": 2020,
                    "content": "Lorem ipsum 2"
                },
                {
                    "id": 2019,
                    "content": "Lorem ipsum 3"
                }
            ]
        }
    },
    props: {

    },
    components: {
        TabItem
    }
}
</script>
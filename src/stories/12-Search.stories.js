import Vue from 'vue';

import SearchResults from 'Src/components/search/SearchResults/SearchResults.vue';
import ArticleListing from 'Src/components/search/ArticleListing/ArticleListing.vue';

export default {
  title: 'Search',
};

export const SearchEngineResults = () => ({
  //props: {
    //dataset: 'http://www.mocky.io/v2/5eb98b822f00004f4c3c328a'
  //},
  render: h => {
    return h(SearchResults, {
      props: {
        dataset: {
          endpoint: 'http://www.mocky.io/v2/5eb98b822f00004f4c3c328a',
          searchUrl: ''
        }
      }
    })
  }
});
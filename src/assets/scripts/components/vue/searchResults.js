import Vue from 'vue'

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

// Import required Vue components
// Use "Vue" webpack alias as shorthand for "../../../src/components"
import SearchResults from "Vue/search/SearchResults/SearchResults.vue"

export class VueSearchResults {
  constructor(el) {
    if (!el) return;

    this.el = el;

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    var VueSearchResults = Vue.extend({
      render(h) {
        return h(SearchResults, {
          props: {
            dataset: this.dataset
          }
        })
      },
      beforeMount: function() {
        this.dataset = {...this.$el.dataset};
      }
    });

    new VueSearchResults({
        el: this.el
    })
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(VueSearchResults, "[data-vue=searchResults]")
}, QUEUE.DOM)
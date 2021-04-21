import Vue from 'vue'

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

// Import required Vue components
// Use "Vue" webpack alias as shorthand for "../../../src/components"
import ArticleListing from "Vue/search/ArticleListing/ArticleListing.vue"

export class VueArticleListing {
  constructor(el) {
    if (!el) return;

    this.el = el;

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    var VueArticleListing = Vue.extend({
      render(h) {
        return h(ArticleListing, {
          props: {
            dataset: this.dataset
          }
        })
      },
      beforeMount: function() {
        this.dataset = {...this.$el.dataset};
      }
    });

    new VueArticleListing({
        el: this.el
    })
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(VueArticleListing, "[data-vue=articleListing]")
}, QUEUE.DOM)
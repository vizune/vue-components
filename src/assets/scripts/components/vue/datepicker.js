import Vue from 'vue'

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

// Import required Vue components
// Use "Vue" webpack alias as shorthand for "../../../src/components"
import DatePicker from "Vue/forms/DatePicker/DatePicker.vue"

export class VueDatePicker {
  constructor(el) {
    if (!el) return;

    // this.el is "data-vue=datepicker" defined in the Component Manager at the end
    this.el = el;

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    var VueDatePicker = Vue.extend({
      render(h) {
        return h(DatePicker, {
          props: {
            dataset: this.dataset
          }
        })
      },
      beforeMount: function() {
        this.dataset = {...this.$el.dataset};
      }
    });

    new VueDatePicker({
        el: this.el
    })
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(VueDatePicker, "[data-vue=datepicker]")
}, QUEUE.DOM)
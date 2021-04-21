import Vue from 'vue'
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

import AmenitiesMap from "Vue/map/amenitiesMap/AmenitiesMap.vue"

export class VueAmenitiesMap {
    constructor(el) {
        if (!el) return;

        this.el = el;

        LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
    }

    init() {
        var VueAmenitiesMap = Vue.extend({
            render(h) {
                return h(AmenitiesMap, {
                    props: {
                      dataset: this.dataset
                    }
                  });
            },
            beforeMount: function () {
              this.dataset = {...this.$el.dataset};
            }
        });

        new VueAmenitiesMap({
            el: this.el
        })
    }

}

export default LoadManager.queue(() => {
    new ComponentManager(VueAmenitiesMap, "[data-vue=development-amenities-map]")
}, QUEUE.DOM)
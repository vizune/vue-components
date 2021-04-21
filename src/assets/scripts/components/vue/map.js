import Vue from 'vue'
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

import Map from "Vue/map/Map.vue"

export class VueMap {
    constructor(el) {
        if (!el) return;

        this.el = el;

        LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
    }

    init() {
        var VueMap = Vue.extend({
            render(h) {
                return h(Map, {
                    props: {
                      item: this.endpoint
                    }
                  });
            },
            beforeMount: function () {
                this.endpoint = JSON.parse(this.$el.dataset.endpoint);
            }
        });

        new VueMap({
            el: this.el
        })
    }

}

export default LoadManager.queue(() => {
    new ComponentManager(VueMap, "[data-vue=map]")
}, QUEUE.DOM)
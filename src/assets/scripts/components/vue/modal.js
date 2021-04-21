import Vue from 'vue'
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

import Modal from "Vue/modal/Modal.vue"

export class VueModal {
    constructor(el) {
        if (!el) return;

        this.el = el;

        LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
    }

    init() {
        var VueModal = Vue.extend({
            render(h) {
                return h(Modal, {
                    props: {
                      item: this.endpoint
                    }
                  });
            },
            beforeMount: function () {
                this.endpoint = JSON.parse(this.$el.dataset.endpoint);
            }
        });

        new VueModal({
            el: this.el
        })
    }

}

export default LoadManager.queue(() => {
    new ComponentManager(VueModal, "[data-vue=modal]")
}, QUEUE.DOM)
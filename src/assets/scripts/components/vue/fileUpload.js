import Vue from 'vue'
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

import FileUpload from "Vue/forms/FileUpload/FileUpload.vue"

export class VueFileUpload {
    constructor(el) {
        if (!el) return;

        this.el = el;

        LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
    }

    init() {
        var VueFileUpload = Vue.extend({
            render(h) {
                return h(FileUpload, {
                    props: {
                      id: this.idProp,
                      name: this.nameProp
                    }
                  });
            },
            beforeMount: function () {
                this.idProp = this.$el.id.toString();
                this.nameProp = this.$el.getAttribute("name");
            }
        });

        new VueFileUpload({
            el: this.el
        })
    }

}

export default LoadManager.queue(() => {
    new ComponentManager(VueFileUpload, "[data-vue=fileUpload]")
}, QUEUE.DOM)
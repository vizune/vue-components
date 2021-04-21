import { $, $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    The navbar component uses the toggle helper in src/scripts/helpers/toggler.js
    However we need to ensure dropdowns close when another is opened
    A click eventlistener checks if any other dropdowns have "is-open" class and removes it
*/

export class ToggleChecks {
  constructor(el) {
    if (!el) return;

    this.el = el;

    this.back = $1("[data-js~=toggleChecks-back]", this.el);
    this.triggers = [...$("[data-js~=toggleChecks-trigger]", this.el)];

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.bind();
  }

  bind() {
      this.triggers.map(el => {
          el.addEventListener("click", e => this.triggerCheck(e))
      })

      this.back.addEventListener("click", this.backMenu.bind(this));
  }

  triggerCheck(e) {
    let current = e.currentTarget;

    if(current.classList.contains("is-open")) {
      this.back.classList.add("is-active");
      this.back.dataset.target = current.dataset.target;
    }
    else {
      this.backMenu();
    }

    // Check if any other dropdowns are currently open
    // If so, remove class "is-open" from trigger and sub-menu
    this.triggers.map(el => {
        let target = el.dataset.target;
        let menu = $1("[data-id~=" + target + "]", this.el)
        if(el.classList.contains("is-open") && el !== current) {
            el.classList.remove("is-open");
            menu.classList.remove("is-open");
        }
    })
  }

  backMenu() {
    this.back.classList.remove("is-active");
    this.back.dataset.target = "";

    this.triggers.map(el => {
      let target = el.dataset.target;
      let menu = $1("[data-id~=" + target + "]", this.el)
      if(el.classList.contains("is-open")) {
          el.classList.remove("is-open");
          menu.classList.remove("is-open");
      }
    })
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(ToggleChecks, "[data-js~=toggleChecks]")
}, QUEUE.DOM)

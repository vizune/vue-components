import { $, $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    This functionality ensures that only one modal is open at a time

    Any future functionality needed for the modal component should go here
    unless it is abstract and can be used for other components e.g. toggleState

    Development suggestion: close modal when clicked outside component
*/

export class Modal {
  constructor(el) {
    if (!el) return;

    this.el = el;

    const observerOptions = {
        attributes: true
    }

    // Mutation observer to detect opened modal
    // Checks if other modals are opened and then closes them
    this.observer = new MutationObserver(mutations => {
        mutations.forEach(this.handleMutation);
    })

    this.observer.observe(this.el, observerOptions)

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {

  }

  handleMutation(mutation) {
      // First detect if the mutation is adding the open attribute
      if(mutation.target.hasAttribute("open")) {
        // Then check if the other modals on the page are open
        [...$("[data-js~=modal]")].map(el => {
            if(el.hasAttribute("open") && el !== mutation.target) {
                // Close modal that is not the one that has just been opened
                el.removeAttribute("open")
            }
        })
      }
  }
}

export default LoadManager.queue(() => {
  new ComponentManager(Modal, "[data-js~=modal]")
}, QUEUE.DOM)

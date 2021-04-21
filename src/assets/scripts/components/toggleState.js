import { $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    Abstract functionality that toggles class name
    Uses data-state to specify class name that will be toggled
    Uses data-target and data-id identify element and set active state
    data-id is an attribute on the element that requires the active state toggling
    data-target and data-id must use the same identifier

    This can also be used to toggle attributes by adding "data-attribute"
    E.g. Modal component has <dialog> with open attribute to display
    <button data=js="toggleState" data-target="modalNameGoesHere" data-state="open" data-attribute>
    <dialog class="Modal" data-id="modalNameGoesHere">npm install dialog-polyfill
*/

export class ToggleState {
  constructor(el) {
    if (!el) return;

    this.el = el;
    this.state = this.el.dataset.state;
    this.attribute = this.el.dataset.attribute ? this.el.dataset.attribute : null;
    this.target = $1("[data-id~=" + this.el.dataset.target + "]");

    this.active;

    // Needed when using a function in an event listener
    this.toggle = this.toggle.bind(this);

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.bind();
  }

  bind() {
    this.el.addEventListener("click", this.toggle);
  }

  toggle() {
    if(this.state === "open") {
      this.target.toggleAttribute("open")
    }
    else {
      this.target.classList.toggle(this.state);
    }
  }
}

export default LoadManager.queue(() => {
  new ComponentManager(ToggleState, "[data-js~=toggleState]")
}, QUEUE.DOM)
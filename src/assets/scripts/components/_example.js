import { $, $1, closest } from "Utilities/selector";
import { scrollTo } from "Utilities/scrollto";
import { getOffset } from "Utilities/offset";
import {isInView} from "Utilities/in-view";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    Please add a quick summary describing the purpose of this JS component
    This helps with future developments on the component
    bonus points for including comments especially for complex functions
*/

export class Example {
  constructor(el) {
    if (!el) return;

    this.el = el;

    // Example of single element selector, behaves like querySelector
    this.elementOne = $1("[data-js~=example-elementOne]", this.el);

    // Example of multiple element selector, behaves like querySelectorAll
    this.elements = [...$("[data-js~=example-element]", this.control)];

    // Object of element selectors
    this.children = {
        one: $1('[data-js~="example-one"]', this.el),
        two: $1('[data-js~="example-two"]', this.el),
        three: $1('[data-js~="example-three"]', this.el)
    }

    // Example used for scrollTo / getOffset example. 
    // Doesn't have "this.el" because it isn't contained within component
    this.header = $1('[data-js~="header"]');

    // Needed when using a function in an event listener
    this.mouseOver = this.mouseOver.bind(this);

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.bind();
  }

  bind() {
    // Example of assigning an event listeners to multiple elements
    this.elements.map(el => {
        el.addEventListener("mouseover", this.mouseOver)
    })

    // Example of an event listener parsing data to a function
    // this will allow you to access the event information in the function e.g. e.currentTarget or e.eventType
    this.elementOne.addEventListener("click", e => this.clickEvent(e));
  }

  clickEvent(e) {
    // Example of using a static function
    let container = Example.getContainer(e.currentTarget);

    // Example of using scrollTo and getOffset utilities
    scrollTo(container, getOffset(this.header));
  }

  mouseOver() {
    // Example of using an object with element selectors
    console.log(this.children.three)

    // Example of using inView ultility - will return true or false
    console.log(isInView(this.header))
  }

  static getContainer(el) {
    // Example of a static function
    // Example of using "closest" element selector
    return closest(".element", el);
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(Example, "[data-js~=example]")
}, QUEUE.DOM)

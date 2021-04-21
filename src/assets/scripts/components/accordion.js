import anime from "animejs"

import ComponentManager from '../component-manager'
import {DebouncedResizeManager} from '../optimisations/optimised-resize-manager'
import LoadManager, { QUEUE } from '../load-manager'

import {$, $1} from '../../utilities/selector'

/**
 * THIS IS OLD AND NO LONGER USED
 * BUT USEFUL FOR REFERENCE ON ANY TRICKS TO USE
 */

export class Accordion {
  /**
   * Filter mutation records to contain only added node mutations
   * @param {MutationRecord} mutation
   */
  static isAddMutation(mutation) {
    return !!mutation.addedNodes.length;
  }

  /**
   * Filter mutation records to contain only removed node mutations
   * @param {MutationRecord} mutation
   */
  static isRemoveMutation(mutation) {
    return !!mutation.removedNodes.length;
  }

  /**
   * Return the list of added nodes
   * @static
   * @function
   * @param {MutationRecord} mutation
   * @returns {NodeList} nodes
   */
  static getAddedNodes(mutation) {
    return [...mutation.addedNodes];
  }

  /**
   * Return the list of removed nodes
   * @param {MutationRecord} mutation
   */
  static getRemovedNodes(mutation) {
    return [...mutation.removedNodes];
  }

  /**
   * Concat array of node lists
   * @param {Array} arr1 The new array to push values to
   * @param {Array} arr2 The array to push
   */
  static concatArray(arr1, arr2) {
    return arr1.concat(arr2)
  }

  /**
   * Create animation for accordion item
   * @static
   * @param {HTMLElement} el The element to create the animation for
   */
  static createAnim(el) {
    return anime({
      targets: el,
      duration: 300,
      easing: 'easeInSine',
      autoplay: false,
      height: [0, Accordion.getTrueHeight(el)],
    })
  }

  /**
   * Get true height by child content height
   * Requires an extra wrapper
   * @static
   * @param {HTMLElement} el The element to find the height of
   */
  static getTrueHeight(el) {
    return el.children[0].offsetHeight;
  }

  /**
   * Get the element data for an accordion item
   * @static
   * @param {HTMLElement} el The accordion item
   * @param {int} id the accordion item's ID
   * @returns {Object}
   */
  static getElements(el, id) {
    return el.el ? el : {
      id,
      el,
      header: $1('[data-js=accordion-header]', el),
      body: $1('[data-js=accordion-body]', el),
      key: el.getAttribute("data-key"),
      inited: false
    }
  }

  constructor(el) {
    this.el = el;
    //this.items = [...this.el.children].map(Accordion.getElements);
    this.items = [...$('[data-js~=accordion-item]', this.el)].map(Accordion.getElements)
    this.active = this.items.length > 0 ? 0 : null;
    this.activeKey = this.active == null ? null : this.items[this.active].key;
    if ( ! this.el || ! this.items ) return;

    this.recalculate = this.recalculate.bind(this);

    // Wait until resources loaded
    LoadManager.queue(this.ready.bind(this), QUEUE.RESOURCES);
  }

  ready() {
    this.items.forEach(this.init, this);

    let observer = new MutationObserver(mutations => {
      // Store current active key
      if ( this.items[this.active] ) {
        this.activeKey = this.items[this.active].key;
      }

      // Find items to remove
      let removed = mutations
        .filter(Accordion.isRemoveMutation)
        .map(Accordion.getRemovedNodes)
        .reduce(Accordion.concatArray, []);

      // Remove old items
      this.items = this.items.filter(item => !removed.includes(item.el));

      // Add new items
      this.items = mutations
        .filter(Accordion.isAddMutation)
        .map(Accordion.getAddedNodes)
        .reduce(Accordion.concatArray, this.items)
        .map(Accordion.getElements)
        .map(this.init, this);

      // Reset active state
      if ( this.items.length ) {
        this.active = this.items.findIndex(x => x.key == this.activeKey);
        this.active = this.active < 0 ? null : this.active;
        this.activeKey = isNaN(this.active) ? null : this.items[this.active].key;
      } else {
        this.active = null;
      }

      // Recalculate
      this.recalculate();
    });

    observer.observe(this.el, {
      childList: true
    });

    DebouncedResizeManager.add({
      action: this.recalculate
    });
  }

  init(item) {
    if ( ! item.inited ) {
      item.anim = Accordion.createAnim(item.body);
      item.header.addEventListener("click", this.toggle.bind(this, item));
    }
    return item;
  }

  toggle(item) {
    if ( this.active === item.id ) {
      item.anim.play();
      if ( !item.anim.reversed ) {
        item.anim.reverse();
      }
      item.el.classList.remove('is-open');
      this.active = null;
    } else {
      item.anim.play();
      if ( item.anim.reversed ) {
        item.anim.reverse();
      }
      item.el.classList.add('is-open');
      if ( this.active !== null ) {
        this.items[this.active].anim.play();
        if ( !item.anim.reversed ) {
          this.items[this.active].anim.reverse();
        }
        this.items[this.active].el.classList.remove('is-open');
      }
      this.active = item.id;
    }
  }

  recalculate() {
    let active = this.active;
    this.active = null;
    this.items = this.items.map(this.reset, this);

    //if ( active !== null )
      //this.toggle(this.items[active]);
  }

  reset(item) {
    item.body.setAttribute('style', null);
    item.el.classList.remove('is-open');
    item.anim = Accordion.createAnim(item.body);
    return item;
  }
}

export default LoadManager.queue(() => (
  new ComponentManager(Accordion, '[data-js~=accordion]')
), QUEUE.DOM);

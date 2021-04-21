import {$1} from 'Utilities/selector';
import {scrollTo} from 'Utilities/scrollto';
import {getOffset} from 'Utilities/offset';

import {DebouncedResizeManager} from 'Optimisations/optimised-resize-manager';
import ComponentManager from 'Tools/component-manager';
import LoadManager, { QUEUE } from 'Tools/load-manager'

const scrollEl = (document.scrollingElement||document.documentElement||document.body);

const comparePosition = {
  above: function(p, h) {
    return scrollEl.scrollTop < p
  },
  below: function(p, h) {
    return scrollEl.scrollTop > (p + h);
  }
}

export class ScrollTo {
  constructor(el) {
    this.el = el;
    this.conditions = [];
    this.init();
  }

  init() {
    if ( this.el.hasAttribute('data-target') ) {
      this.target = $1(`[data-anchor=${this.el.getAttribute('data-target')}]`);

      if ( this.target ) {
        if ( this.el.hasAttribute('data-scroll-conditions') ) {
          this.conditions = this.el.getAttribute('data-scroll-conditions')
            .split(' ')
            .filter(x => typeof comparePosition[x] === "function");
        }

        LoadManager.queue(this.ready.bind(this), QUEUE.RESOURCES)
      } else {
        console.warn("ScrollTo target could not be found");
      }
    } else {
      console.warn("ScrollTo trigger element must have a target");
    }
  }

  ready() {
    // Calculate the offset from the size of the header
    // Update when the browser resizes
    DebouncedResizeManager.add({
      action: () => {
        this.offset = parseInt(document.body.style.paddingTop || 95);
      }
    })
    this.bind();
  }

  bind() {
    this.el.addEventListener('click', this.go.bind(this));
  }

  go(e) {
    if ( ! this.conditions.length || this.checkConditions() )
      scrollTo(this.target, -this.offset);
    e.currentTarget.blur();
  }

  targetBounds() {
    return [getOffset(this.target) - this.offset, this.target.offsetHeight];
  }

  checkConditions() {
    let t = this.targetBounds();
    return this.conditions.some(x => comparePosition[x](...t));
  }
}

export default LoadManager.queue(() => (
  new ComponentManager(ScrollTo, '[data-js~=scroll-to]')
), QUEUE.DOM);

import anime from "animejs";

import {$1} from "Utilities/selector";

import {DebouncedResizeManager} from "Optimisations/optimised-resize-manager";
import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager"

/*
  HOW TO USE THIS HELPER
  On the trigger (i.e button) add data-js="reveal"
  On the element you want to reveal add data-reveal="[name goes here]"
  Use the same name used in data-reveal on your trigger for data-target="[name goes here]"
  Using data-toggle on your trigger means you can expand/collapse
*/

export class Reveal {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    if ( this.el.hasAttribute("data-target") ) {
      this.target = $1(`[data-reveal~=${this.el.getAttribute("data-target")}]`);

      this.canToggle = this.el.hasAttribute("data-toggle");
      this.hasBlur = this.el.hasAttribute("data-blur");

      if ( this.hasBlur ) {
        this.blur = this.blur.bind(this);
      }

      this.lastSize = 0;

      if ( this.target ) {
        LoadManager.queue(this.ready.bind(this), QUEUE.RESOURCES)
      } else {
        console.warn("Reveal target could not be found");
      }
    } else {
      console.warn("Reveal trigger element must have a target");
    }
  }

  ready() {
    DebouncedResizeManager.add({
      action: this.createAnim.bind(this)
    });
    this.bind();
  }

  bind() {
    this.el.addEventListener("click", this.show.bind(this));
  }

  createAnim(e, v) {
    if ( v.size != this.lastSize ) {
      this.opened = false;

      this.target.removeAttribute("style");

      this.target.style.overflow = "hidden";

      this.anim = anime({
        targets: this.target,
        opacity: [0, 1],
        height: [0, this.target.children[0].offsetHeight],
        duration: 300,
        autoplay: false,
        easing: 'easeInSine',
        complete: ({direction}) => {
          if ( direction == "normal" ) {
            this.target.style.overflow = "visible";
          }
        }
      });

      this.lastSize = v.size;
    }
  }

  show(e) {
    if ( this.anim ) {
      if ( ! this.opened ) {
        if ( this.anim.reversed ) {
          this.anim.reverse();
          this.anim.play();
        }
        else {
          this.anim.play();
        }
        this.opened = true;
        if ( this.hasBlur ) {
          window.addEventListener("click", this.blur)
        }
      } else if ( this.canToggle ) {
        this.close();
      }
    }
  }

  close() {
    this.anim.play();
    this.anim.reverse();
    this.opened = false;
  }

  blur(e) {
    if ( ~this.el.compareDocumentPosition(e.target) & Node.DOCUMENT_POSITION_CONTAINED_BY ) {
      this.close();
      window.removeEventListener("click", this.blur);
    }
  }
}

export default LoadManager.queue(() => (
  new ComponentManager(Reveal, "[data-js~=reveal]")
), QUEUE.DOM);

import anime from "animejs";
import { $, $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";
import { DebouncedResizeManager } from "Optimisations/optimised-resize-manager"; 

/*
    HOW THIS COMPONENT WORKS
    Only mobile, content is expandable / collapsible
    Using ResizeManager and matchMedia to detect whether it's a small device
    Reusing the reveal helper functionality (src/scripts/helpers/reveal.js)
*/

export class MobileCollapse {
  constructor(el) {
    if (!el) return;

    this.el = el;

    this.target = $1(`[data-reveal~=${this.el.getAttribute("data-target")}]`);
    this.canToggle = this.el.hasAttribute("data-toggle");
    this.lastSize = 0;

    this.reveal = false;
    this.mobile = "(max-width: 768px)";

    this.show = this.show.bind(this);

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    DebouncedResizeManager.add({
        action: this.createAnim.bind(this)
    });
    
    DebouncedResizeManager.add({
        action: () => {
            this.detectDevice();
            this.addReveal();
        }
    });
  }

  detectDevice() {
    this.reveal = window.matchMedia(this.mobile).matches ? true : false;
  }

  addReveal() {
      if(this.reveal) {
          this.el.addEventListener("click", this.show)
      }
      else {
          if(this.anim) {
            this.target.removeAttribute("style");
          }
          // In case list was opened on mobile and resized larger
          this.el.classList.remove("is-open");
          
          this.el.removeEventListener("click", this.show)
      }
  }

  createAnim(e, v) {
    if ( v.size != this.lastSize) {
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
          else {
            this.target.style.overflow = "hidden";
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
        this.el.classList.add("is-open");
      } else if ( this.canToggle ) {
        this.close();
      }
    }
  }

  close() {
    this.anim.play();
    this.anim.reverse();
    this.opened = false;
    this.el.classList.remove("is-open");
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(MobileCollapse, "[data-js~=mobileCollapse]")
}, QUEUE.DOM)

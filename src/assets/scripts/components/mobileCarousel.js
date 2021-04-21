import { $, $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";
import { DebouncedResizeManager } from "Optimisations/optimised-resize-manager"; 

/*
    HOW THIS COMPONENT WORKS
    Only mobile, content turns into a carousel
    Using ResizeManager and matchMedia to detect whether it's a small device
*/

export class MobileCarousel {
  constructor(el) {
    if (!el) return;

    this.el = el;

    this.init = false;
    this.mobile = "(max-width: 1023px)";

    this.show = this.show.bind(this);
    this.swiper = null;

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
    this.init = window.matchMedia(this.mobile).matches ? true : false;
  }

  addReveal() {
      if(this.init) {
          this.carouselInit();
      }
      else {
          this.carouselDestroy();
      }
  }

  carouselInit() {
    this.swiper = new Swiper (this.el, {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true
    });
  }

  carouselDestroy() {
    if(this.swiper) {
      this.swiper.destroy(true, true);
    }
  }
}

export default LoadManager.queue(() => {
  new ComponentManager(MobileCarousel, "[data-js~=mobileCarousel]")
}, QUEUE.DOM)

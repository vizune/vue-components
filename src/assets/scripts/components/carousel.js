import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

import Swiper, { Navigation, Pagination } from "swiper";

export class Carousel {
  constructor(el) {
    if (!el) return;

    this.el = el;  

    this.itemsPerView = this.el.dataset.itemsPerView ? this.el.dataset.itemsPerView : false;

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.swiperInit();
  }

  swiperInit() {
    Swiper.use([Navigation, Pagination]);

    new Swiper(this.el, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      observer: true,
      observeParents: true,
      speed: 400,
      initialSlide: 0,
      autoHeight: false,
      loop: true,
      autoplay: false,
      spaceBetween: this.itemsPerView ? 30 : 0,
      slidesPerView: this.itemsPerView ? auto : 1,
      centeredSlides: true,
      slidesOffsetBefore: 0,
      grabCursor: true,
    })    
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(Carousel, "[data-js~=carousel]")
}, QUEUE.DOM)
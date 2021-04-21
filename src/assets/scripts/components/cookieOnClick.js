import { $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    Created for the Emergency banner component but open to be used elsewhere
    Creates a cookie when button clicked using data attributes on element
    If the cookie is present on page load, class name "has-cookie" is applied
*/

export class CookieOnClick {
  constructor(el) {
    if (!el) return;

    this.el = el;
    this.button = $1("[data-js~=cookieOnClick-button]", this.el);
    this.cookieName = this.button.dataset.cookieName;
    this.cookieValue = this.button.dataset.cookieValue;
    this.cookieExpires = this.button.dataset.cookieExpires ? this.button.dataset.cookieExpires : null;

    this.createCookie = this.createCookie.bind(this);

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.checkCookie();
    this.bind();
  }

  bind() {
    this.button.addEventListener("click", this.createCookie);
  }

  checkCookie() {
      let regex = document.cookie.match("^(?:.*;)?\\s*" + this.cookieName + "\\s*=\\s*([^;]+)(?:.*)?$");

      if(regex) {
        this.el.classList.add("has-cookie");
      }
  }

  createCookie() {
    if(this.cookieName && this.cookieValue) {
        if (this.cookieExpires) {
            document.cookie = encodeURIComponent(this.cookieName) + "=" + encodeURIComponent(this.cookieValue) + "; expires=" + this.cookieExpires;
        }
        else {
            document.cookie = document.cookie = this.cookieName +"=" + this.cookieValue;
        }

        this.el.classList.add("has-cookie");

    }
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(CookieOnClick, "[data-js~=cookieOnClick]")
}, QUEUE.DOM)

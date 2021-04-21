import { $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    Created for the Emergency banner component but open to be used elsewhere
    Creates a cookie and expires based on specified date
    If the cookie is present on page load, class name "has-cookie" is applied
*/

export class CookieExpire {
  constructor(el) {
    if (!el) return;

    this.el = el;
    this.cookie = false;
    this.cookieName = this.el.dataset.cookieName;
    this.cookieValue = this.el.dataset.cookieValue;
    this.cookieExpires = this.el.dataset.cookieExpires ? this.button.dataset.cookieExpires : null;

    this.createCookie = this.createCookie.bind(this);

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.checkCookie();

    if(!this.cookie) {
        this.createCookie();
    }
  }

  checkCookie() {
      let regex = document.cookie.match("^(?:.*;)?\\s*" + this.cookieName + "\\s*=\\s*([^;]+)(?:.*)?$");

      if(regex) {
        this.el.classList.add("has-cookie");
        this.cookie = true;
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
  new ComponentManager(CookieExpire, "[data-js~=cookieExpire]")
}, QUEUE.DOM)

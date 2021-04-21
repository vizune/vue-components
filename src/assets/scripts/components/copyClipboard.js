import { $1 } from "Utilities/selector";

import ComponentManager from "Tools/component-manager";
import LoadManager, { QUEUE } from "Tools/load-manager";

/*
    HOW THIS COMPONENT WORKS
    Social share component includes copy page url button
    This button contains the url with data-copy attribute
    The element with the url is selected and copied
*/

export class CopyClipboard {
  constructor(el) {
    if (!el) return;

    this.el = el;
    this.copy = $1("[data-copy]", this.el);

    LoadManager.queue(this.init.bind(this), QUEUE.RESOURCES)
  }

  init() {
    this.bind();
  }

  bind() {
    this.el.addEventListener("click", e => this.copyText(e));
  }

  copyText(e) {
    var range, selection, worked;
    e.preventDefault();

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(this.copy);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(this.copy);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      try {
        document.execCommand('copy');
        this.el.classList.add("is-copied")
        setTimeout(() => {
            this.el.classList.remove("is-copied")
          }, 2500);
      }
      catch (err) {
        console.log("Unable to copy text")
      }
  }

}

export default LoadManager.queue(() => {
  new ComponentManager(CopyClipboard, "[data-js~=copyClipboard]")
}, QUEUE.DOM)

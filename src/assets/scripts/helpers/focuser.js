import { $1, $ } from 'Utilities/selector'
import LoadManager, { QUEUE } from 'Tools/load-manager'

export const Focuser = function (el) {

  el = el || $1('[data-js~=focuser]');

  if (!el) return;

  let elTrigger = el.querySelector('[data-trigger]');
  let elTarget = el.querySelector('[data-target]');
  
  if (!elTrigger)
    throw new Error("Focusable element must have a trigger");

  if (!elTarget)
    throw new Error("Focusable element must have a target");

  elTrigger.addEventListener('focus', () => {
    elTrigger.classList.add('is-active');
    elTarget.classList.add('is-active');
  });

  elTrigger.addEventListener('blur', () => {
    if (elTrigger.value.length <= 0) {
      elTrigger.classList.remove('is-active');
      elTarget.classList.remove('is-active');
    }
  });
}

export default LoadManager.queue(() => {
  [...$("[data-js~=focuser]")].forEach(Focuser);
}, QUEUE.DOM);

import { $1, $ } from 'Utilities/selector'

import LoadManager, { QUEUE } from 'Tools/load-manager'

/*
  HOW TO USE THIS HELPER
  On the trigger (i.e button) add data-js="toggler-toggle"
  On the element you want to toggle add data-js="toggler" and data-id="[name goes here]"
  Use the same name used in data-reveal on your trigger for data-target="[name goes here]"

  You can also have seperate triggers for both toggle open / close
  using data-js="toggler-open" and data-js="toggler-close"
*/

export const Toggler = function (el) {

  el = el || $1('[data-js~=toggler]');

  if (!el) return;

  if (!el.hasAttribute('data-id'))
    throw new Error("Togglable element must have an ID");

  const target = el.getAttribute('data-id');

  const triggers = {
    open: [...$(`[data-js~=toggler-open][data-target=${target}]`)],
    close: [...$(`[data-js~=toggler-close][data-target=${target}]`)],
    toggle: [...$(`[data-js~=toggler-toggle][data-target=${target}]`)],
    switch: [...$(`[data-js~=toggler-switch][data-target=${target}]`)]
  };

  if (!triggers.open.length && !triggers.close.length && !triggers.toggle.length && !triggers.switch.length)
    throw new Error(`Togglable element ${target} has no triggers`);

  Object.keys(triggers).forEach(action => {
    triggers[action].forEach(el => {
      el.addEventListener('click', Toggler[action])
    })
  })
}

Toggler.getTarget = function (el) {
  const id = el.getAttribute('data-target');
  const target = $1(`[data-js~=toggler][data-id=${id}]`);
  if (!target)
    throw new Error(`Target ${id} was not found`);

  return target;
}

Toggler.open = function (e) {
  const target = Toggler.getTarget(e.currentTarget);

  Toggler.group(e);
  
  target.classList.add('is-open');
}

Toggler.close = function (e) {
  const target = Toggler.getTarget(e.currentTarget);
  target.classList.remove('is-open');
}

Toggler.toggle = function (e) {
  const target = Toggler.getTarget(e.currentTarget);
  
  Toggler.group(e);

  target.classList.toggle('is-open');
  this.classList.toggle('is-open');
}

Toggler.group = function(e) {
  const group = e.currentTarget.getAttribute('data-group');

  if (group) {
    const items = [...$(`[data-group="${group}"]`)];
    items.forEach(el => {
      if(el !== e.currentTarget) { 
        const target = Toggler.getTarget(el);
        el.classList.remove('is-open');
        target.classList.remove('is-open');
      }
    })
  }
}

Toggler.switch = function(e) {
  const self = $1(`[data-id="${e.currentTarget.getAttribute('data-self')}"]`);
  const target = Toggler.getTarget(e.currentTarget);

  self.classList.remove('is-open');
  target.classList.add('is-open');
}

export default LoadManager.queue(() => {
  [...$("[data-js~=toggler]")].forEach(Toggler);
}, QUEUE.DOM);

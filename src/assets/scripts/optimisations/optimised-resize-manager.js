import OptimisedEventManager from './optimised-event-manager';

import throttle from 'Utilities/throttle'
import debounce from 'Utilities/debounce'

export const DebouncedResizeManager = new OptimisedEventManager({
  func: debounce,
  event: "resize",
  newEvent: "debouncedResize",
  rate: 300
});

export const ThrottledResizeManager = new OptimisedEventManager({
  func: throttle,
  event: "resize",
  newEvent: "throttledResize",
});

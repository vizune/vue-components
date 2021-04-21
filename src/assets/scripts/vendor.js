// Libraries
import 'vue'
import 'lazysizes'; // Lazy loading images
import 'swiper'; // Carousel

// Polyfills
import 'core-js/es/promise'
import 'core-js/es/number'
import 'core-js/stable/promise'
import 'core-js/stable/string/includes'
import 'core-js/stable/string/repeat'
import 'core-js/stable/object/is'
import 'core-js/stable/object/assign'
import 'core-js/stable/object/keys'
import 'core-js/stable/array/from'
import 'core-js/stable/array/find'
import 'core-js/stable/array/find-index'
import 'core-js/stable/array/includes'
import 'core-js/stable/array/for-each'
import 'whatwg-fetch'
import 'custom-event-polyfill'
import 'objectFitPolyfill/dist/objectFitPolyfill.basic.min' // object-fit in CSS isn't supported by IE
import 'svgxuse' // <use> in SVG isn't supported by IE (needed for icon sprites)
import 'dialog-polyfill' // <dialog> is not supported by IE and Safari (needed for modal component)
import 'date-input-polyfill'; // input[type=date] isn't supported by Safari / IE
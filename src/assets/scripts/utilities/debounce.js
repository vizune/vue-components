const debounce = (type, name, obj, rate) => {
  obj = obj || window;
  let timeout = null;
  let detail = {};

  const func = e => {
    if ( timeout ) {
      clearTimeout(timeout);
      timeout = null
    }

    detail = { detail: { originalEvent: e } };

    timeout = setTimeout(() => {
      obj.dispatchEvent(new CustomEvent(name, detail))
      timeout = null;
    }, rate)
  }

  obj.addEventListener(type, func);
}

export default debounce;

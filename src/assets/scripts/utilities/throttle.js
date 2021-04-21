var throttle = function(type, name, obj) {
  obj = obj || window;
  var running = false;
  let detail = {};
  var func = function(e) {
    if (running) { return; }
    running = true;
    detail = { detail: { originalEvent: e } };
    requestAnimationFrame(function() {
      obj.dispatchEvent(new CustomEvent(name, detail));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

export default throttle

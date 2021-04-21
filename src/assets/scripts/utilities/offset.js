export function getOffset(el, body = document.body) {
  let offset = el.offsetTop;
  while ( el != body ) {
    el = el.parentNode;
    if ( getComputedStyle(el).position == "static" ) continue;
    offset += el.offsetTop;
  }
  return offset;
}

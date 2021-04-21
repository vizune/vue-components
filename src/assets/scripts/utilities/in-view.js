export function isInView(el) {
  let rect = el.getBoundingClientRect();

  return (
    (
      rect.top >= 0 && rect.top <= window.innerHeight ||
      rect.bottom >= 0 && rect.bottom <= window.innerHeight
    )
    &&
    (
      rect.left >= 0 && rect.left <= window.innerWidth ||
      rect.right >= 0 && rect.right <= window.innerWidth
    )
  );
}

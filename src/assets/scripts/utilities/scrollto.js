import anime from "animejs";
import { getOffset } from 'utilities/offset';

export function scrollTo(t, offset, delay, body = (document.scrollingElement || document.documentElement || document.body), autoplay = true) {
  if ( !t ) return;
  // console.log()
  // const body = (document.scrollingElement||document.documentElement||document.body);
  const position = body.scrollTop;
  const o = getOffset(t, body) + (offset||0);
  let pos = {scrollTop: position};
  const tween = anime({
    targets: pos,
    scrollTop: o,
    duration: 200,
    easing: 'easeInCubic',
    autoplay: false,
    delay: delay || 0,
    update: () => {
      body.scrollTop = pos.scrollTop
    }
  })
  return autoplay ? tween.play() : tween;
}

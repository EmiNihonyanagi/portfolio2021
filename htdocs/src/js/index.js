
import { loading } from './modules/_loading';
import { svgAnimation } from './modules/_svgAnimation';
import { polyfill } from './modules/_polyfill';
// import { viewport } from './modules/_viewport';
import { btnClickFunc } from './modules/_btnClickFunc';
import { smoothScroll } from './modules/_smoothScroll';
import { wowEffects } from './modules/_wowEffects';
import { scrollTrigger } from './modules/_scrollTrigger';
import { scrollBlockAnime } from './modules/_scrollBlockAnime';


$(function () {
  loading();
  svgAnimation();
  polyfill();
  smoothScroll();
  // viewport();
  btnClickFunc();
  wowEffects();
  scrollTrigger();
  scrollBlockAnime();
});
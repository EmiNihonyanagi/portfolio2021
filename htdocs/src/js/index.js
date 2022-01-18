import { polyfill } from './modules/_polyfill';
// import { viewport } from './modules/_viewport';
// import { btnClickFunc } from './modules/_btnClickFunc';
// import { getSearchParams } from './modules/_getSearchParams';
// import { accordion } from './modules/_accordion';
// import { backToTop } from './modules/_backToTop';
// import { checkView } from './modules/_checkView';
// import { customSelect } from './modules/_customSelect';
// import { modal } from './modules/_modal';
import { smoothScroll } from './modules/_smoothScroll';
// import { stickyHeader } from './modules/_stickyHeader';
// import { swiperSlider } from './modules/_swiperSlider';
import { wowEffects } from './modules/_wowEffects';
// import { smoothScrollVs } from './modules/_smoothScrollVs';
// import { sampleArray } from './modules/_sampleArray';
// import { locomotive_scroll } from './modules/_locomotive_scroll';
import { scrollTrigger } from './modules/_scrollTrigger';
import { scrollBlockAnime } from './modules/_scrollBlockAnime';


$(function(){
  polyfill();
  smoothScroll();
  // smoothScrollVs()
  // sampleArray();
  // viewport();
  // btnClickFunc();
  wowEffects();
  // accordion();
  // swiperSlider();
  // customSelect();
  // backToTop();
  // modal();
  // locomotive_scroll();
  scrollTrigger();
  scrollBlockAnime();
});

// $(window).on('load resize scroll', function () {
//   checkView();
//   stickyHeader();
// });

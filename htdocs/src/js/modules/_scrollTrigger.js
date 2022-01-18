export const scrollTrigger = () => {
//   gsap.set('.main', { autoAlpha: 0 }); //初期状態としてopacity: 0;とvisibility: hidden;が指定される

//   gsap.to('.main', { //アニメーションしたい要素を指定
//     x: 100, //横に800px動かす
//     autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
//   scrollTrigger: {
//     trigger: '.home-career',//アニメーションが始まるトリガーとなる要素
//     start: 'top center', //アニメーションが始まる位置を指定
//   }
// });
  const el = document.querySelector('.js-horizontalArea__item');

  gsap.to(el, {
    xPercent: -200,
    ease: 'none',
    scrollTrigger: {
      trigger: '.js-horizontalArea',
      start: 'top top',
        end: `+=${el.clientWidth}`,
      scrub: true,
      pin: true,
    },
  });


};

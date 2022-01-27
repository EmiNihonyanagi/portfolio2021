export const scrollTrigger = () => {

  // const el_01 = document.querySelector('.js-main__title');
  // gsap.to(el_01, {
  //   x: -100,
  //   autoAlpha: 1,
  //   scrollTrigger: {
  //     markers: true,
  //     trigger: '.home__profile',//アニメーションが始まるトリガーとなる要素
  //     start: 'bottom right', //アニメーションが始まる位置を指定
  //   },
  // });

  gsap.from(".js-main__title", {
  scrollTrigger: ".js-main__title", // same as scrollTrigger: {trigger: ".line-1", toggleActions: "play none none none", start: "top bottom", end: "bottom top"}
  duration: 1,
  autoAlpha: 1,
  markers: true,
});



  const el_02 = document.querySelector('.js-horizontalArea__item01');
  gsap.to(el_02, {
    xPercent: -200,
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: '.js-horizontalArea01',
      start: 'top left',
        end: `+=${el_02.clientWidth}`,
      scrub: true,
      pin: true,
    },
  });

  const el_03 = document.querySelector('.js-horizontalArea__item02');
  gsap.to(el_03, {
    xPercent: -200,
    ease: 'none',
    scrollTrigger: {
      markers: true,
      trigger: '.js-horizontalArea02',
      start: 'top left',
        end: `+=${el_03.clientWidth}`,
      scrub: true,
      pin: true,
    },
  });


};

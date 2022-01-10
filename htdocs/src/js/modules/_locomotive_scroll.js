export const locomotive_scroll = () => {
  (function () {
        var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        // direction: 'horizontal',
        // multiplier: 1,
        // horizontalGesture: true
      });
    })();
};

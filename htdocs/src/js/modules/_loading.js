export const loading = () => {
  const target = document.getElementsByClassName('js-loading')[0];
  const fv = document.getElementsByClassName('home__fv-area')[0];
  window.setTimeout(function () {

    target.classList.add("is-animate");
    fv.classList.add("is-show");
  }, 5000);

  const timeAction = function () {
    const target_img = document.querySelectorAll('.loading__areaImage');
    for (let i = 0; i < target_img.length; i++) {
      target_img[i].classList.add("is-show");
    }
  }

  setTimeout(timeAction, 1000);

};
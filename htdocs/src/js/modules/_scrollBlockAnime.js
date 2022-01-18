export const scrollBlockAnime = () => {
  // function EachTextAnimeControl() {
  //   $('.eachTextAnime').each(function () {
  //     var elemPos = $(this).offset().top - 50;
  //     var scroll = $(window).scrollTop();
  //     var windowHeight = $(window).height();
  //     if (scroll >= elemPos - windowHeight) {
  //       $(this).addClass("appeartext");

  //     } else {
  //       $(this).removeClass("appeartext");
  //     }
  //   });
  // }
  const myFunc = function(){
    const target = document.getElementsByClassName('animate__target');
    const position = Math.floor(window.innerHeight * .75);
    for (let i = 0; i < target.length; i++) {
        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
        if (offsetTop < position) {
            target[i].classList.add('is-animate');
        }
    }
  }
  //スクロールイベントリスナーに登録
  window.addEventListener('scroll', myFunc, false);

// 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//   EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  // $(window).on('load', function () {
  //   //spanタグを追加する
  //   var element = $(".eachTextAnime");
  //   element.each(function () {
  //     var text = $(this).text();
  //     var textbox = "";
  //     text.split('').forEach(function (t, i) {
  //       if (t !== " ") {
  //         if (i < 10) {
  //           textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
  //         } else {
  //           var n = i / 10;
  //           textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
  //         }

  //       } else {
  //         textbox += t;
  //       }
  //     });
  //     $(this).html(textbox);
  //   });

  //   EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  };

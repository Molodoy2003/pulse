
// $(document).ready(function(){
//     $('.slider__inner').slick({
//         // infinite: true,        // бесконечный скролл
//         // slidesToShow: 2,       // сколько картинок показывает
//         // slidesToScroll: 2      // сколько картинок перелистыывает
//         // dots: true,            // добавление точек
//         speed: 600,           // скорость переключения
//         // adaptiveHeight: true,    // автоподбор высоты картинки
//         // autoplay: true,         // автопереключение слайда
//         // autoplaySpeed: 2000,    // скорость автопереключения
//         prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_l.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_r.png"></button>',
       
//         responsive: [             // адаптив
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false,
//                 }
//             }
//         ]
//     });
// });


/* tiny-slider */

const slider = tns({
    container: '.slider__inner',
    items: 1,
    autoplay: false,
    speed: 900,
    controls: false,
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});


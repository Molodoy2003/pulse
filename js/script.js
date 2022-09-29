/*jshint esversion: 6 */

/* tiny-slider */

// const slider = tns({
//     container: '.slider__inner',
//     items: 1,
//     autoplay: false,
//     speed: 900,
//     controls: false,
//   });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });

    
$(document).ready(function(){
        $('.slider__inner').slick({
            // infinite: true,        // бесконечный скролл
            // slidesToShow: 2,       // сколько картинок показывает
            // slidesToScroll: 2      // сколько картинок перелистыывает
            // dots: true,            // добавление точек
            speed: 600,           // скорость переключения
            // adaptiveHeight: true,    // автоподбор высоты картинки
            // autoplay: true,         // автопереключение слайда
            // autoplaySpeed: 2000,    // скорость автопереключения
            prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_l.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_r.png"></button>',
           
            responsive: [             // адаптив
                {
                    breakpoint: 992,
                    settings: {
                      dots: true,
                      arrows: false,
                    }
                }
            ]
        });

    
        // табы
        // $('ul.calalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
        //     $(this)
        //     .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
        //     .closest('div.catalog__container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
        // });


        // Modal
        $('[data-modal=consultation]').on('click', function() {  // клик на первое модальное окно
            $('.overlay, #consultation').fadeIn('slow');        // показываем модальное окно
        });
        $('.modal__close').on('click', function() {             // клик на крестик
            $('.overlay, #consultation, #order, #thanks').fadeOut('slow');  // закрываем модальные окна 
        });
        
        $('.catalog__footer-btn').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow'); 
            });
        });

        // маска ввода номера телефона
        $('input[name=phone]').mask('+7 (999) 999-99-99');
    });



const tabsBtn = document.querySelectorAll('.catalog__tab');
const tabsItem = document.querySelectorAll('.catalog__content');

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('catalog__tab-active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('catalog__tab-active');
            });
            tabsItem.forEach(function(item) {
                item.classList.remove('catalog__content-active');
            });
    
            currentBtn.classList.add('catalog__tab-active');
            currentTab.classList.add('catalog__content-active');
        }

    });
});
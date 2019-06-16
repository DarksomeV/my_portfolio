(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

$(document).ready(function(){
    (function() {
        $('.small-btn').click(function () {
            $('.bd-example-modal-sm').modal('show');
        })
    })();
    

    function showAddMessageCat(elem){
        var parent = elem.closest('.product-hov');
        var added_message = parent.querySelector('.added_message');
        $(added_message).fadeIn(300);
        setTimeout(function () {
            $(added_message).fadeOut(300);
        },800);
    }

    function showAddMessageCatRow(elem){
        var parent = elem.closest('.product-list');
        var added_message = parent.querySelector('.added_message');
        $(added_message).fadeIn(300);
        setTimeout(function () {
            $(added_message).fadeOut(300);
        },800);
    }

    function showAddMessageNew(elem){
        var parent = elem.closest('.product-show');
        var added_message = parent.querySelector('.added_message');
        $(added_message).fadeIn(300);
        setTimeout(function () {
            $(added_message).fadeOut(300);
        },3000);
    }

    $('.product-list .btn-add-to-cart').click(function(){
        showAddMessageCatRow(this);
    });

    $('.product-hov .btn-add-to-cart').click(function(){
        showAddMessageCat(this);
    });

    $('.product-show .btn-add-to-cart').click(function(){
        showAddMessageNew(this);
    });

    document.querySelector('#compare_informer.mylist').parentNode.style.position = "absolute";
    document.querySelector('.wishlist_informer_wrap').style.position = "absolute";

    //COUNT MAIN
    
    //Считает сколько дней прошло с определенного момента
    function whatDate(year, month, day) {
        var d = new Date();
        d.setYear(year);
        d.setMonth(month - 1, day);
        var now = new Date();
        var delta = now - d;

        return Math.floor(delta / 1000 / 60 / 60 / 24);
    }

    //Стартовое значение установленых значений
    var startSetupedItems = 9617;
    var startSetupedPipes = 57156;
    var startWallWidth = 5905;

    //Количество дней для отсчета
    let daysForSetup = whatDate(2019, 3, 18) + '';

    //Стартовое значение дней сколько на рынке
    let daysFromStart = whatDate(2008, 9, 10) + '';
    if (document.querySelector('.counter.days') && document.querySelector('.counter.setuped_items') ) {
        document.querySelector('.counter.days').innerHTML = daysFromStart;

        //Вставляем наши результаты в разметку
        document.querySelector('.counter.setuped_items').innerHTML = startSetupedItems + (daysForSetup * 2);
        document.querySelector('.counter.setuped_pipes').innerHTML = startSetupedPipes + (daysForSetup * 8);

        //Тут для стены. Перерасчет раз в 7 дней
        let divider = Math.floor(daysForSetup / 7);
        if (divider > 0) {
            document.querySelector('.counter.wall_width').innerHTML = startWallWidth + (divider * 6);
        }
        //Для того чтоб красиво листаись циферки
        $('.counter').counterUp({
            delay: 10,
            time: 2000,
            formatter: function (n) {
                return n.replace(/(\d)/g, '<span>$1</span>');

            }
        });
    }
    ////COUNT MAIN END

    var backdrop = $('.backdrop');
    console.log(backdrop);

    function scrollbarWidth() {
        var documentWidth = parseInt(document.documentElement.clientWidth);
        var windowsWidth = parseInt(window.innerWidth);
        var scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }
    var scrollWidth = scrollbarWidth() + 'px';
    console.log(scrollWidth);

    $( ".navbar.catalog_menu" )
        .mouseover(function() {
            $("body").addClass("fixed");
            // console.log('mouseover ' + document.body.offsetWidth);

            $('body').css('padding-right', scrollWidth)
        })
        .mouseout(function() {
            $("body").removeClass("fixed");
            // console.log('mouseout ' + document.body.offsetWidth);
            $('body').css('padding-right', '0px');
        });
    
    if (document.querySelector('.left-filters') && document.querySelector('.user_preferences') && document.querySelector('.breadcrumb')) {
        let bottom = document.querySelector('.user_preferences');
        let top = document.querySelector('.breadcrumb');
        let headernew = document.querySelector('#product-list-block h1');
        var distance = top.offsetTop - bottom.offsetTop - bottom.offsetHeight;
        var newmargin = headernew.offsetHeight + bottom.offsetHeight;
        // console.log(newmargin);
        // alert(distance);
        var heightHeader = $('#product-list-block h1').outerHeight(true);
        document.querySelector('.left-filters').style.marginTop = heightHeader + 'px';

        //Делаю для заголовка позиционированием сдвиг влево (берем ширину фильтров и добавляем падинги блока)
        document.querySelector('#product-list-block h1').style.right = $('.left-filters-wrap').outerWidth(true) + 15 + 'px';
    }

    
    
    $(function () {
        if (document.querySelector('.product-open__tabs')) {
            $('.description-tab').on('click', function () {
                $.scrollTo('#description-tab', 1500, {
                    offset: function () {
                        return {top: -140};
                    }
                });
            });
        $('.reviews-tab').on('click', function () {
            $.scrollTo('#reviews-tab', 1500, {
                offset: function () {
                    return {top: -140};
                }
            });
        });
        $('.liders-product').on('click', function () {
            $.scrollTo('#liders-product', 1500, {
                offset: function () {
                    return {top: -140};
                }
            });
        });

        $('.features-tab').on('click', function () {
            $.scrollTo('#features-tab', 1500, {
                offset: function () {
                    return {top: -140};
                }
            });
        });

        $('.documentation-tab').on('click', function () {
            $.scrollTo('#documentation-tab', 1500, {
                offset: function () {
                    return {top: -150};
                }
            });
        });

        $('.tips-for-choosing-tab').on('click', function () {
            $.scrollTo('#tips-for-choosing-tab', 1500, {
                offset: function () {
                    return {top: -150};
                }
            });
        });
    }

    });



    // responsive nav
    var responsiveNav = $('#toggle-nav');
    var navBar = $('.nav-bar');

    responsiveNav.on('click',function(e){
        e.preventDefault();
        console.log(navBar);
        navBar.toggleClass('active')
    });

    // pseudo active
    if($('#docs').length){
        var sidenav = $('ul.side-nav').find('a');
        var url = window.location.pathname.split( '/' );
        var url = url[url.length-1];

        sidenav.each(function(i,e){
            var active = $(e).attr('href');

            if(active === url){
                $(e).parent('li').addClass('active');
                return false;
            }
        });
    }

    if (document.querySelector('.mobile-header')){
        if (window.matchMedia("(max-width: 479px)").matches){
            $('body').css('padding-top', '50px');
        } else {
        $('body').css('padding-top', '50px');
        }
    }

    window.addEventListener("optimizedResize", function() {
        if (document.querySelector('.mobile-header')){
            if (window.matchMedia("(max-width: 479px)").matches){
                $('body').css('padding-top', '50px');
            } else {
                $('body').css('padding-top', '50px');
            }
        }
    });

});

hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad();

jQuery(document).ready(function($) {
    $('.fadeOut').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
    });
    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    });
});

// grab an element


//Вынести в отдельный файл
if (document.querySelector(".header-custom")) {
    var myElement = document.querySelector(".header-custom");
// construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement);
    // initialise
    headroom.init();

    (function () {
        const menu = document.querySelector('.menu-section-mob');
        const toggler = document.querySelector('.nav-custom__toggler');
        const body = document.querySelector('body');
        const filterButton = document.querySelector('.filter-mob__toggler');

        toggler.addEventListener('click', function (e) {

            // if (this.classList.contains("shown") && !filterButton.classList.contains("shown")) {
            if (this.classList.contains("non-shown") || e.target === document.querySelector('body')) {
                this.classList.remove('non-shown');
                menu.classList.remove('width-null');
                body.classList.add('overflow-hidden');
                this.classList.add('shown');
            } else if (this.classList.contains("shown")) {
                if ( filterButton && !filterButton.classList.contains("shown")) {
                    this.classList.remove('shown');
                    menu.classList.add('width-null');
                    body.classList.remove('overflow-hidden');
                    this.classList.add('non-shown');
                }
                this.classList.remove('shown');
                menu.classList.add('width-null');
                body.classList.remove('overflow-hidden');
                this.classList.add('non-shown');
            } else if (this.classList.contains("shown")) {
                if (filterButton && filterButton.classList.contains("shown")) {
                    this.classList.remove('shown');
                    menu.classList.add('width-null');
                    this.classList.add('non-shown');
                }
                this.classList.remove('shown');
                menu.classList.add('width-null');
                this.classList.add('non-shown');
            }
            //Убираем кнопку сортировки при клике на меню
            if ($('.form-horizontal--mob') && $('.form-horizontal--mob').css('display', 'block')) {
                $('.form-horizontal--mob').css('display', 'none');
            }

        });


        $(document).ready(function() {
            if (sessionStorage['mobileMenu'] == 1) {
                $('.form-horizontal--mob').css('display', 'block')
                body.classList.add('overflow-hidden');
                filterButton.classList.add('shown');
                filterButton.classList.remove('non-shown');
                $('.filter-sets--mobile').fadeIn(500);
            }
            console.log(sessionStorage['mobileMenu']);
        })

        body.addEventListener('click', function (e) {

            if (e.target === document.querySelector('body')) {

                if (filterButton && filterButton.classList.contains("shown") && body.classList.contains("overflow-hidden")) {
                    $('.filter-sets--mobile').fadeOut(500);
                    body.classList.remove('overflow-hidden');
                    filterButton.classList.remove('shown');
                    filterButton.classList.add('non-shown');
                    sessionStorage['mobileMenu'] = 0;
                    console.log(sessionStorage['mobileMenu']);
                }
                if (toggler.classList.contains("non-shown") && !menu.classList.contains("width-null")) {
                    toggler.classList.remove('non-shown');
                    menu.classList.remove('width-null');
                    body.classList.add('overflow-hidden');
                    toggler.classList.add('shown');

                } else if (toggler.classList.contains("shown")) {
                    toggler.classList.remove('shown');
                    menu.classList.add('width-null');
                    body.classList.remove('overflow-hidden');
                    toggler.classList.add('non-shown');

                }
                //Убираем кнопку сортировки при клике на overflow
                if ($('.form-horizontal--mob') && $('.form-horizontal--mob').css('display', 'block')) {
                    $('.form-horizontal--mob').css('display', 'none');
                }

            }
        })
    })();

}


//Функция для уточнения размеров продуктов на главной
function titlesHeight(titles) {
    var max_height = 0;
    // var titles_array = $(this).find('.main_item_title');


    for (let i=0; i<titles.length; i++) {
        console.log(titles[i].outerHeight);
        if (max_height<titles[i].offsetHeight) {
            max_height = titles[i].offsetHeight;
        }
    }
    console.log(max_height);
    for (let i=0; i<titles.length; i++) {
        titles[i].style = "min-height:" + max_height +'px;';
    }
}

//Ресайз тайтлов на главной мобилка
(function () {
    window.addEventListener("optimizedResize", function() {




        //пересчет высоты цен в продукте при ресайзе
        if (document.querySelector('.block-price')){
            var pricesMain = $('.block-price');
            console.log(pricesMain);
            var max_height = 0;
            // var titles_array = $(this).find('.main_item_title');


            for (let i=0; i<pricesMain.length; i++) {
                if (max_height<pricesMain[i].offsetHeight) {
                    max_height = pricesMain[i].offsetHeight;
                }
            }
            for (let i=0; i<pricesMain.length; i++) {
                pricesMain[i].style = "min-height:" + max_height +'px;';
            }
        }


        if (document.querySelectorAll('.sub-cat .product')) {

            //Невозможно использовать готовую функцию, что выше, так что увы идет повторение кода

            let titles = document.querySelectorAll('.sub-cat .product .product__title');
            for (let i=0; i<titles.length; i++) {
                titles[i].style = 'height: auto;';
            }

            var max_height = 0;
            // var titles_array = $(this).find('.main_item_title');


            for (let i=0; i<titles.length; i++) {
                if (max_height<titles[i].offsetHeight) {
                    max_height = titles[i].offsetHeight;
                }
            }
            console.log(titles);
            for (let i=0; i<titles.length; i++) {
                titles[i].style = "height:" + max_height +'px;';
            }
        }
        });
})();


<!-- Скрипт плавного открытия и закрытия блока -->
$(document).ready(function () {
   $('.info-button').click(function (e) {
       e.preventDefault();
       e.stopPropagation();
       console.log($(this));
       if($(this).hasClass( "no-text" )){
           $(this).removeClass( "no-text" ).addClass("yes-text");
           $(this).html('Скрыть всё');
       } else if($(this).hasClass( "yes-text" )){
           $(this).removeClass( "yes-text" ).addClass("no-text");
           $(this).html('Показать всё');
       }
        $('.main-content-wrapper.slicer').slideToggle();
   });

   //
   // var boolThirdLvl = $('.nav-column.lvl-3');
   //
   // if (boolThirdLvl)  {
   //     console.log(boolThirdLvl);
   // }
});


<!-- Скрипт плавного открытия и закрытия фильтров для мобилки -->
$(document).ready(function () {
    const body = document.querySelector('body');



    //Для открытия подкомментария
    $('.comment-reply').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
         console.log(e.target.tagName == 'BUTTON');
         if (e.target.tagName == 'BUTTON') {
             // console.log(e.target.closest('.comment-reply').querySelector('.comment-reply-form'));
             let form = this.querySelector('.comment-reply-form');
             $(form).fadeToggle(500);
             console.log(this);
         }
        // $('.form-horizontal--mob').fadeToggle(500);
    });


    // $('.filter-mob__toggler').click(function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     // console.log($(this));
    //     if($(this).hasClass( "non-shown" )){
    //         $('.filter-sets--mobile').fadeIn(1000);
    //         $(this).removeClass( "non-shown" ).addClass("shown");
    //
    //     //     $(this).html('Скрыть всё');
    //     } else if($(this).hasClass( "shown" )){
    //         $(this).removeClass( "shown" ).addClass("non-shown");
    //         $('.filter-sets--mobile').fadeOut(1000);
    //
    //
    //     //     $(this).removeClass( "yes-text" ).addClass("no-text");
    //     //     $(this).html('Показать всё');
    //     }
    //     $('.filter-sets--mobile').fadeOut(1000);
    // });

    $('.filter-mob__toggler').click(function (e) {
        e.preventDefault();

        sessionStorage['mobileMenu'] = 1;

        // e.stopPropagation();
        // $('.filter-sets--mobile').fadeToggle(500);

        if (this.classList.contains("non-shown") || e.target === document.querySelector('body')) {
            this.classList.remove('non-shown');
            $('.filter-sets--mobile').fadeIn(500);
            body.classList.add('overflow-hidden');
            this.classList.add('shown');
        } else if (this.classList.contains("shown")) {
            this.classList.remove('shown');
            $('.filter-sets--mobile').fadeOut(500);
            // body.classList.remove('overflow-hidden');
            this.classList.add('non-shown');
        }

        //Убираем кнопку сортировки при клике на фильтры
        if ($('.form-horizontal--mob') && $('.form-horizontal--mob').css('display', 'block')) {
            $('.form-horizontal--mob').css('display', 'none');
        }
    });

    $('.sort-mob__toggler').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.form-horizontal--mob').fadeToggle(500);
    });

    jQuery('.mobile-categories.catalog-menu li').each(function(){
        if(jQuery(this).hasClass('has-child')){
            jQuery(this).append('<div class="plus"><p><i class="fa fa-angle-double-down" aria-hidden="true"></i>\n</p></div>');
        }
    });

    //Мобильное меню - раскрытие первого уровня
    $('.catalog-menu__item').click(function (e) {
        console.log(e.target);
        var myItem = e.target;
            $('.catalog-menu__item').each(function () {
                    $(this).find('>ul.lvl-2.shown').slideUp();
                    // $(this).find('>.plus').toggleClass('minus');
                    if ($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                        $(this).find('>.plus').removeClass('minus');
                        $(this).find('>ul.lvl-2.shown').slideUp();
                        return false;
                    }
                    $(this).find('>ul.lvl-2.shown').removeClass('shown');
            });


        if (this === e.target || $(this).find('>.plus i')[0] === e.target) {
            e.preventDefault();
            e.stopPropagation();
            // $(this).find('>ul.lvl-2').slideDown(500);
            if (!$(this).find('>ul.lvl-2').hasClass('shown')) {
                $(this).find('>ul.lvl-2').slideToggle(500);
                $(this).find('>ul.lvl-2').addClass('shown');
                $(this).find('>.plus').toggleClass('minus');
                $(this).addClass('selected');
            }


        }

        });

    //Мобильное меню - раскрытие второго уровня
    $('.catalog-menu__item li.lvl-2.has-child').click(function (e) {

        if (this === e.target || $(this).find('i')[0] === e.target) {
            e.preventDefault();
            e.stopPropagation();
            $(this).find('>ul.lvl-3').slideToggle(500);
            $(this).find('>.plus').toggleClass('minus');
        }
    });

//    Подгон высоты заголовков

    var titlesMain = $('.product__info .featured');
    var imgsMain = $('.product-item .product__image');
    var pricesMain = $('.block-price');
    // var productsOnProducts = $('.products .product');
    titlesHeight(titlesMain);
    titlesHeight(imgsMain);
    titlesHeight(pricesMain);
    // productsHeight(productsOnProducts);

});

$(window).load(function() {
    $('#slider-w1, #slider-w0').css('display', 'block');
    $('#slider-w1, #slider-w0').css('visibility', 'visible');
});

$(document).ready(function () {
    $('.brands-carousel__container .brands-grid').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: '<div class="prev"><i class=\'fa fa-chevron-left\'></i></div>',
        nextArrow: '<div class="next"><i class=\'fa fa-chevron-right\'></i></div>',
    });
});
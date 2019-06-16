(function ($) {
    var card_items = $('.card-inner');
    var animation_in = 'fadeInLeft';
    var animation_out = 'fadeOutLeft';
    var menu_items = $('.top-menu li');
    var container = $('.container');
    var width = $(window).width();

    $('.top-menu').on('click', 'a', function () {
        var id = $(this).attr('href');
        var card_item = $('#card-' + id.replace('#', ''));
        var menu_item = $(this).closest('li');
        if (width >= 1200) {
            if (!menu_item.hasClass('current-menu-item')) {
                menu_items.removeClass('current-menu-item');
                container.find(card_items).removeClass('animated ' + animation_in);
                if ($(container).hasClass('opened')) {
                    container.find(card_items).addClass('animated ' + animation_out);
                }
                window.location.hash = id;
                menu_item.addClass('current-menu-item');
                container.addClass('opened');
                container.find(card_item).removeClass('animated ' + animation_out);
                container.find(card_item).addClass('animated ' + animation_in);
                $(card_items).addClass('hidden');
                $(card_item).removeClass('hidden');
                $(card_item).addClass('active');
            }
        }
        console.log(card_item);
        return false;
    });


    var url_hash = location.hash;
    var sectionElem = $('#card-' + url_hash.replace('#', ''));
    // if (sectionElem.length && $('.top-menu-onepage').length) {
        menu_items.removeClass('current-menu-item');
        $('.top-menu li a[href="' + url_hash + '"]').parent('li').addClass('current-menu-item');

        if (width >= 1200) {
            container.find(card_items).removeClass('animated ' + animation_in);
            if ($(container).hasClass('opened')) {
                container.find(card_items).addClass('animated ' + animation_out);
            }
            container.addClass('opened');
            sectionElem.removeClass('animated ' + animation_out);
            sectionElem.addClass('animated ' + animation_in);
            $(card_items).addClass('hidden');
            sectionElem.removeClass('hidden');
            sectionElem.addClass('active');
        // }
    }


    $(window).on('resize', function () {
        var width = $(window).width();
        var height = $(window).height();
        if ((width < 1200)) {
            console.log('resize');
            $('.card-inner').removeClass('hidden');
            $('.card-inner').removeClass('fadeOutLeft');
            $('.card-inner').removeClass('rotateOutUpLeft');
            $('.card-inner').removeClass('rollOut');
            $('.card-inner').removeClass('jackOutTheBox');
            $('.card-inner').removeClass('fadeOut');
            $('.card-inner').removeClass('fadeOutUp');
            $('.card-inner').removeClass('animated');
        } else {
            var current_id = $('.top-menu li.current-menu-item a').attr('href');
            $('#card-' + current_id.replace('#', '')).addClass('current-menu-item');
            // $('.card-inner .card-wrap').slimScroll({height: '100%'});
        }
    });
})(jQuery);

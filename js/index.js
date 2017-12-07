(function ($) {
    $.noConflict();
    $(function () {
        let 
            oAccount = $('.account'),
            oMe      = $('.top ul'),
            oInput   = $('.search-frame input'),
            oNo      = $('.search-frame a');
            oAccount.on('mouseenter', function () {
                oMe.css('display', 'block');
            });
            oAccount.on('mouseleave', function () {
                oMe.css('display', 'none');
            });
            oInput.on('mouseenter', function () {
                oNo.css('display', 'block');
            });
            oInput.on('mouseleave', function () {
                oNo.css('display', 'none');
            });
    });
})(jQuery);
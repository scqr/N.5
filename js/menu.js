(function ($) {
    $.noConflict();

    //显示纵向列表
    // $('#mid p').bind('mouseenter', function () {
    //     $('.choose').css('display', 'block');
    // });

    //菜单栏
    function initMenu() {
        $('#MENU ul').hide();
        $('#MENU .B').show();
        $('#MENU h3').click(
        function() {
            var checkElement = $(this).next();
            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                return false;
            }
            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#MENU ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                return false;
            }
        }
    )};
    $(document).ready(function() {initMenu();});

    //地址
    // $('#box .more').click(function () {
    //     $('#box .brands div').css('display', 'block');
    // });


})(jQuery);
(function ($) {
    $.noConflict();

    //显示纵向列表
    // $('#mid p').bind('mouseenter', function () {
    //     $('.choose').css('display', 'block');
    // });

    //菜单栏
    $('#MENU ul').hide();
    // $('#MENU .B').show();
    $('#MENU h3').click(function () {
        $(this).children('.q').toggleClass('open');
        $(this).next().toggle(200);
    });

    //地址
    // console.log($('#more01').html());
    $('#more01').toggle(
        function () {
            // console.log(1);
            $('#hidden .trouble').css('display', 'block');
            $('#more01').html("收起");
            // console.log($('#hidden').html());
        },
        function () {
            $('#hidden .trouble').css('display', 'none');
            $('#more01').html("更多");
        }
    );
})(jQuery);
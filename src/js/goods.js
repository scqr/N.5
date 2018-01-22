$(function ($) {
    $.noConflict();
    var 
        oAccount = $('.account'),
        oMe      = $('.top ul'),
        oInput   = $('.search-frame input'),
        oNo      = $('.search-frame a'),
        oCode    = $('.code'),
        oCenterUl = $('.center ul'),
        oRight    = $('.right'),
        oNone     = $('.none'),
        oBtn      = $('#btn'),
        oChooseDl    = $('.choose dl'),
        oListDt = $('#list dt'),
        oListPanel   = $('#list .panel');

    var iTimer = null;

    //我的账户
    oAccount.on('mouseenter', function () {
        clearTimeout(iTimer);
        oAccount.css('backgroundColor','#ffffff');
        oAccount.css('borderColor', '#dcdcdc');
        var iIndex = oAccount.index($(this));
        oMe.css('display', 'none').eq(iIndex).css('display', 'block');
    });
    oAccount.on('mouseleave', function () {
        clearTimeout(iTimer);
        iTimer = setTimeout(function () {
            oAccount.css('backgroundColor','transparent');
            oAccount.css('borderColor', 'transparent');
            oMe.css('display', 'none');
        }, 50);
    });
    oMe.hover(function () {
        clearTimeout(iTimer);
    }, function () {
        oAccount.css('backgroundColor','transparent');
        oAccount.css('borderColor', 'transparent');
        oMe.css('display', 'none');
    });
    
    //搜索框
    oInput.on('mouseenter focus', function () {
        oInput.css('background', 'url(img/bg_input.png) repeat-x');
        oNo.css('display', 'block');
    });
    oInput.on('mouseleave', function () {
        iTimer = setTimeout(function () {
            oInput.css('background', 'none');
            oNo.css('display', 'none');
        }, 50);
    });
    oNo.hover(function () {
        clearTimeout(iTimer);
    }, function () {
        oNo.css('display', 'none');
    });

    //二维码
    oCode.on('mouseenter', function () {
        oCenterUl.css('display', 'block');
    });
    oCode.on('mouseleave', function () {
        iTimer = setTimeout(function () {
            oCenterUl.css('display', 'none');
        }, 50);
    });
    oCenterUl.hover(function () {
        clearTimeout(iTimer);
    }, function () {
        oCenterUl.css('display', 'none');
    });

    //购物车
    oRight.on('mouseenter', function () {
        oRight.css('background', 'url(img/All_bg.gif) no-repeat left -74px');
        oNone.css('display', 'block');
    });
    oRight.on('mouseleave', function () {
        iTimer = setTimeout(function () {
            oRight.css('background', 'url(img/All_bg.gif) no-repeat left -30px');
            oNone.css('display', 'none');
        }, 50);
    });
});
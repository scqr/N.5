$(function ($) {
    $.noConflict();

    getCookie('name');

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
        // var sInput = oInput.value;
        // oNo.on('click', function () {
        //     sInput = '';
        // });

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

        //轮播图
        $('.carousel').carousel({interval: 3000});  

        //纵向选项卡
        oChooseDl.on('mouseenter', function () {
            clearTimeout(iTimer);
            var iIndex = oChooseDl.index($(this));
            oListDt.css('background', '#f8f8f8').eq(iIndex).css('background', '#ffffff');
            oListPanel.css('display', 'none').eq(iIndex).css('display', 'block');
        });
        oChooseDl.on('mouseleave', function () {
            iTimer = setTimeout(function () {
                oListDt.css('background', '#f8f8f8');
                oListPanel.css('display', 'none');
            }, 50);
        });
        oListPanel.hover(function () {
            clearTimeout(iTimer);
        }, function () {
            var iIndex = oChooseDl.index($(this));
            oListDt.eq(iIndex).css('background', '#ffffff');
        });

        //倒计时
        var intDiff = parseInt(86400); //倒计时总秒数量
        function timer(intDiff) {
            setInterval(function () {
            var 
                hour = 0,
                minute = 0,
                second = 0; //时间默认值
            if (intDiff > 0) {
                hour = Math.floor(intDiff / (60 * 60));
                minute = Math.floor(intDiff / 60) - (hour * 60);
                second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
            }
            if (hour   <= 9) hour   = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $('#hour_show').html('<strong>' + hour + '</strong>');
            $('#minute_show').html('<strong>' + minute + '</strong>');
            $('#second_show').html('<strong>' + second + '</strong>');
            intDiff--;
            }, 1000);
        }
        $(function () {
            timer(intDiff);
        });

        //横向选项卡
        $('#uls li').hover(function () {
            var iIndex = $(this).index();
            $('#uls li').removeClass('hover').eq(iIndex).addClass('hover');
            $('.act').css('display', 'none').eq(iIndex).css('display', 'block');
        });

        //手风琴
        // $('.move .toplist').bind('mouseenter', function () {
        //     var iIndex = $('.move').index();
        //     $('.move').removeClass('m').eq(iIndex).addClass('m');
        // });

        //吸顶
        // $(function(){
        //     var TIMER;//定义全局变量
        //     $(window).scroll( function() {
        //         clearTimeout(TIMER);//必须要有这句
        //         if( $(document).scrollTop() > 783 ){
        //             TIMER = setTimeout(function(){
        //                 $(this).addClass("nav");
        //                 // console.log($(document).scrollTop());
        //             },100);
        //         }else{
        //             TIMER = setTimeout(function(){
        //                 $(this).removeClass("nav");
        //             },100);
        //         }
        //     });
        // });

    });
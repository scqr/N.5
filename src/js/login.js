$(function ($) {
    $.noConflict();
    //用户名
    $('#txtRegUserName').focus(() => {
        $('#yes_user').addClass('img_right');
        $('#txtRegUserName').addClass('input_focus');
        $('#tip_user').text("3～30位，由汉字、字母、数字、点、减号、下划线及\"@\"组成").removeClass('reg_errmsg');
    }).blur(() => {
        var reg0 = /^[\u4e00-\u9fa5_a-zA-Z0-9\.\-\@]+$/;
        var reg1 = /^[0-9]+$/;
        if($('#txtRegUserName').val().length < 3 || $('#txtRegUserName').val().length > 30) {
            $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
            $('#tip_user').text("用户名的长度应为3～30个字符之间(汉字占两个字符)！").addClass('reg_errmsg');
        } else if(reg1.test($('#txtRegUserName').val())) {
            $('#yes_user').addClass('img_right');
            $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
            $('#tip_user').text("用户名不能为纯数字！").addClass('reg_errmsg');
        } else if(reg0.test($('#txtRegUserName').val())) {
            $('#yes_user').removeClass('img_right');
            $('#tip_user').text("");
        }
    });
    //密码
    var value;
    $('#txtRegPassword').focus(() => {
        $('#yes_pass').addClass('img_right');
        $('#txtRegPassword').addClass('input_focus');
        $('#tip_pass').text("6～16位，建议使用字母、数字、特殊字符组合").removeClass('reg_errmsg');
    }).blur(() => {
        var reg2 = /^[a-zA-Z0-9_\.\-]+$/;
        var reg3 = /^[0-9]+$/;
        if($('#txtRegPassword').val().length < 6 || $('#txtRegPassword').val().length > 16) {
            $('#txtRegPassword').removeClass('input_focus').addClass('input_failure');
            $('#tip_pass').text("密码的长度应该为6～16个字符之间！").addClass('reg_errmsg');
        } else if(reg3.test($('#txtRegPassword').val())) {
            $('#yes_pass').addClass('img_right');
            $('#txtRegPassword').removeClass('input_focus').addClass('input_failure');
            $('#tip_pass').text("密码过于简单，为保证您的帐户安全请重设密码！").addClass('reg_errmsg');
        } else if(reg2.test($('#txtRegPassword').val())) {
            $('#yes_pass').removeClass('img_right');
            $('#tip_pass').text("");
            return value = $('#txtRegPassword').val();
        }
    });
    //验证密码
    $('#txtRePassword').focus(() => {
        if($('#txtRePassword').val() == "") {
            $('#yes_reset').addClass('img_right');
            $('#txtRePassword').addClass('input_focus');
            $('#tip_reset').text("请您再输一次密码！").removeClass('reg_errmsg');
        }
    }).blur(() => {
        var reg4 = $('#txtRePassword').val();
        if(reg4 !== value) {
            $('#yes_reset').addClass('img_right');
            $('#txtRePassword').removeClass('input_focus').addClass('input_failure');
            $('#tip_reset').text("两次密码不一致，请重新输入！").addClass('reg_errmsg');
        } else {
            $('#yes_reset').removeClass('img_right');
            $('#tip_reset').text("");
            return true;
        }
    });
});
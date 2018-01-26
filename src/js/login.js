$(function ($) {
    $.noConflict();

    //注册
    //用户名
    $('#txtRegUserName').focus(() => {
        $('#yes_user').addClass('img_right');
        $('#txtRegUserName').addClass('input_focus');
        $('#tip_user').text("3～20位，由汉字、字母、数字、点、减号、下划线及\"@\"组成").removeClass('reg_errmsg');
    }).blur(() => {
        var reg0 = /^[\u4e00-\u9fa5_a-zA-Z0-9\.\-\@]+$/;
        var reg1 = /^[0-9]+$/;
        if($('#txtRegUserName').val().length < 3 || $('#txtRegUserName').val().length > 20) {
            $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
            $('#tip_user').text("用户名的长度应为3～20个字符之间(汉字占两个字符)！").addClass('reg_errmsg');
        } else if(reg1.test($('#txtRegUserName').val())) {
            $('#yes_user').addClass('img_right');
            $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
            $('#tip_user').text("用户名不能为纯数字！").addClass('reg_errmsg');
        } 
        // else if(reg0.test($('#txtRegUserName').val())) {
        //     $('#yes_user').removeClass('img_right');
        //     $('#tip_user').text("");
        // }
        $.ajax({
            type:"POST",
            url:"php/loginCheckName.php",
            data:{
               "username":$("#txtRegUserName").val()
            },
            success:function (t) {
                if(t == "1"){
                    $('#yes_user').addClass('img_right');
                    $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
                    $('#tip_user').text("用户名已被注册！").addClass('reg_errmsg');
                } else if($('#txtRegUserName').val().length < 3 || $('#txtRegUserName').val().length > 20) {
                    $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
                    $('#tip_user').text("用户名的长度应为3～20个字符之间(汉字占两个字符)！").addClass('reg_errmsg');
                } else if(reg1.test($('#txtRegUserName').val())) {
                    $('#yes_user').addClass('img_right');
                    $('#txtRegUserName').removeClass('input_focus').addClass('input_failure');
                    $('#tip_user').text("用户名不能为纯数字！").addClass('reg_errmsg');
                } else if(t == "0" && reg0.test($('#txtRegUserName').val())) {
                    $('#yes_user').removeClass('img_right');
                    $('#tip_user').text("");
                }
            }
        });
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
    //验证邮箱
    $('#txtEmail').focus(() => {
        $('#yes_email').addClass('img_right');
        $('#txtEmail').addClass('input_focus'); 
        $('#tip_email').text("格式例如：770107@qq.com; 770107@qq.com.cn").removeClass('reg_errmsg');
    }).blur(() => {
        var reg5 = /[^\x00-\xff]/g;
        var reg6 = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if($('#txtEmail').val().length == 0) {
            $('#txtEmail').removeClass('input_focus').addClass('input_failure');
            $('#tip_email').text("请输入您的邮箱地址！").addClass('reg_errmsg');
        } else if(reg6.test($('#txtEmail').val())) {
            $('#yes_email').removeClass('img_right');
            $('#tip_email').text("");
        } else {
            $('#yes_email').addClass('img_right');
            $('#txtEmail').removeClass('input_focus').addClass('input_failure');
            $('#tip_email').text("邮箱地址格式不正确，请重新输入！").addClass('reg_errmsg');
        }
    });
    //验证码
    var oVerifyCode = $('#verify-code');
    oVerifyCode.text(createVerifyCode());
    oVerifyCode.on('click', () => {
        oVerifyCode.text(createVerifyCode());
    });
    function createVerifyCode() {   // 生成随机字符串
        var sSeeds = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var sVerify = '';
        for(var i = 0; i < 4; i++) {
            var iIndex = Math.floor(Math.random() * sSeeds.length);
            sVerify += sSeeds[iIndex];
        }
        return sVerify;
    }
    var content = oVerifyCode.text();
    $('#txtVerifyCode').focus(() => {
        console.log(1);
        $('#yes_verfycode').addClass('img_right');
        $('#txtVerifyCode').addClass('input_focus'); 
        $('#txtVerifyCodeChkMsg').text("看不清验证码时，可以点击验证码重换一张！").removeClass('reg_errmsg');
    }).blur(() => {
        if($('#txtVerifyCode').val() == 0) {
            $('#yes_verfycode').addClass('img_right');
            $('#txtVerifyCode').removeClass('input_focus').addClass('input_failure');
            $('#txtVerifyCodeChkMsg').text("请输入验证码！").addClass('reg_errmsg');
        } else if($('#txtVerifyCode').val() == content) {
            $('#yes_verfycode').removeClass('img_right');
            $('#txtVerifyCodeChkMsg').text("");
        } else {
            $('#yes_verfycode').addClass('img_right');
            $('#txtVerifyCode').removeClass('input_focus').addClass('input_failure');
            $('#txtVerifyCodeChkMsg').text("验证码不正确，请重新输入！").addClass('reg_errmsg');
        }
    });
    //协议
    $('#elem-proto').on('click', () => {
        $('#shadow').css("display","block");
    });
    //注册提交
    var usernameExists = true;
    $('#frmUserRegister').submit(() => {
        $.ajax({
            url:"php/usercheck.php",
            type:"post",
            data:{
                "username":$("#txtRegUserName").val(),
                "userpass":$('#txtRegPassword').val()
            },
            success:function (data) {
                if(data=="0"){
                    usernameExists = false;
                    // alert("亲，您的用户名已被注册过了，请重新选一个！");
                }else{
                    usernameExists = true;
                    // location.href = "../success.html";
                }
            }
        });
    });

    //登录
    //验证码
    var oCode = $('#code');
    oCode.text(createCode());
    oCode.on('click', () => {
        oCode.text(createCode());
    });
    function createCode() {   // 生成随机字符串
        var sSeeds = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var sVerify = '';
        for(var i = 0; i < 4; i++) {
            var iIndex = Math.floor(Math.random() * sSeeds.length);
            sVerify += sSeeds[iIndex];
        }
        return sVerify;
    }
    var change = oCode.text();
    $('#logincode').focus(() => {
        console.log(1);
        $('#yes_code').addClass('img_right');
        $('#logincode').addClass('input_focus'); 
        $('#tip_code').text("看不清验证码时，可以点击验证码重换一张！").removeClass('reg_errmsg');
    }).blur(() => {
        if($('#logincode').val() == 0) {
            $('#yes_code').addClass('img_right');
            $('#logincode').removeClass('input_focus').addClass('input_failure');
            $('#tip_code').text("请输入验证码！").addClass('reg_errmsg');
        } else if($('#logincode').val() == change) {
            $('#yes_code').removeClass('img_right');
            $('#tip_code').text("");
        } else {
            $('#yes_code').addClass('img_right');
            $('#logincode').removeClass('input_focus').addClass('input_failure');
            $('#tip_code').text("验证码不正确，请重新输入！").addClass('reg_errmsg');
        }
    });
    var login = true;
    $("#Image").on('click', () => {
        $.ajax({
           type:"POST",
           url:"php/login.php",
           data:{
              "username":$("#grand").val(),
              "userpass":$("#pa").val()
           },
            success:function (t) {
                if(t == "1"){
                    login = true;
                    //保存cookie
                    setCookie('name', $('#grand').val(), 7, '/');
                    location.href = "index.html";
                }else{
                    login = false;
                    $("#txtPassword").html("用户名或者密码错误，请您重新输入！");
                }
            }
        });
    });
});
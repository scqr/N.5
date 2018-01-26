<?php
    header("content-type","text/html;charset=utf-8");
    //一、接收前端数据
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    //二、处理
    //1、链接数据库（搭桥）
    $conn = mysql_connect("localhost","root","root");
    //2、选择数据库（目的地）
    mysql_select_db("login",$conn);
    //3、数据库操作
    //3.1查找用户名是否存在
    $sqlStr="select * from vip where username='".$username."'";
    $result = mysql_query($sqlStr,$conn);
    //行数;
    $rows = mysql_num_rows($result);
    if($rows == 0) {
        //3.2把该用户名插入数据库中
        //4、执行SQL（struct query language）语句
        $sqlStr = "insert into vip values('".$username."', '".$userpass."')";
        //echo $sqlStr;
        mysql_query($sqlStr, $conn);
        //5、关闭数据库
        mysql_close($conn);
        //三、响应
        // echo  "注册成功!";
        header("Location:../success.html");
    } else {
        //三、响应
        echo "<script>alert(".'亲，您的用户名已被注册过了，请重新选一个！'.");</script>";
        header("Location:../sign_up.html");
    }
?>
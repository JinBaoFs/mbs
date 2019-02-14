<?php

    /*
        post

        url:login.php

        参数 
              username :  前端传过来的值
              password :  前端传过来的值

        登陆功能 ：查询数据库是否存在username,password

        返回值 0 false 1 ture;

    */

    //引入连接数据库公共文件 content.php
    include 'content.php';

    //获取前端传回来的参数
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    //sql语句 验证账号密码是否在数据库存在
    $sql = "select * from user where name='$username' AND password='$password'";

    //执行sql语句 返回结果集
    $res = $conn->query($sql);

    //判断返回值如果>1账号密码存在则  否则反之
    if($res->num_rows>0){
        echo 1;
    }else{
        echo 0;
    }
?>
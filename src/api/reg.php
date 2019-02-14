<?php
    /*
        post

        url:reg.php

        参数 
              username :  前端传过来的值
              password :  前端传过来的值

        注册功能 ：写入数据库

        返回值 0 false 1 ture;

    */
    
    //引入连接数据库公共文件
    include 'content.php';

    //接收前端传过来的参数
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    //写入sql语句把账号密码存储到数据库
    $sql = "insert into user(name,password) values('$username','$password')";

    //执行sql语句接收返回结果集
    $res = $conn->query($sql);

    //判断$res是否存在如果存在的给前端返回1不存在的话给前端返回0
    if($res){
        echo 1;
    }else{
        echo 0;
    }
    

?>
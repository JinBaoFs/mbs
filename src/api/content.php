<?php
/*
    连接数据库

    配置参数 $servername  = 'localhost'  服务器地址： 本地 localhost:
            $username    = 'username'  默认为 root
            $password    = 'password'  默认为 空
            $dbname      = 'use'       数据库名


*/

    //配置参数
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname ='mbs';

    //创建连接（实例化）
    $conn = new mysqli($servername, $username, $password, $dbname);

    
    // 检测连接
    if ($conn->connect_error) {
    	// 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }

    $conn->set_charset('utf8');
    
?>
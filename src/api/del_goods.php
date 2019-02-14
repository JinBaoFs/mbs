<?php
    /*
        功能::    *删除购物车商品
    */
    //引入连接数据库公共文件
    include 'content.php';

    //接收前端传输过来的参数
    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $title = isset($_GET['title']) ? $_GET['title'] : null;
    $shop = isset($_GET['shop']) ? $_GET['shop'] : null;
    $size = isset($_GET['size']) ? $_GET['size'] : null;
    $color = isset($_GET['color']) ? $_GET['color'] : null;

    //sql语句
    $sql = "delete from cargoods where username='$username' AND color='$color' AND title='$title' AND size='$size' AND shop='$shop'";

    $res = $conn->query($sql);
    
    //如果大于1的话证明删除成功否则删除失败
    if($res){
        echo 1;
    }else{
        echo 0;
    }

?>
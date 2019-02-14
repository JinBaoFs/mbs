<?php
    /*
        功能：详情页插入数据到数据库
              用户添加商品到购物车

    */
    //引入连接数据库公共文件
    include 'content.php';

    //接收前端传过来的
    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $code   = isset($_GET['code']) ? $_GET['code'] : null;
    $color = isset($_GET['color']) ? $_GET['color'] : null;
    $money = isset($_GET['price']) ? $_GET['price'] : null;
    $title = isset($_GET['title']) ? $_GET['title'] : null;
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : null;
    $size = isset($_GET['size']) ? $_GET['size'] : null;
    $num = isset($_GET['num']) ? $_GET['num'] : null;
    $shop = isset($_GET['shop']) ? $_GET['shop'] : null;

    $sql = "select * from cargoods where username='$username' AND code='$code' AND color='$color' AND title='$title' AND size='$size'";

    $res = $conn->query($sql);

    //如果存在这条数据就更新这条数据的num
    if($res->num_rows>0){
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $nums = $row[0]['num']*1+$num;
        $sql2 ="update cargoods set num='$nums' where username='$username' AND color='$color' AND size='$size' AND title='$title'";
        $res2 = $conn->query($sql2);
    }
    //否则的话插入这条数据
    else{
        $sql3 = "insert into cargoods(username,code,title,shop,size,color,imgurl,num,money) values('$username','$code','$title','$shop','$size','$color','$imgurl',$num,$money)";
        $res3 = $conn->query($sql3);
    }


?>
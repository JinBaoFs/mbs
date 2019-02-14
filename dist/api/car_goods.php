<?php

    /*
        get

        初始化详情页 ：根据id查询数据库商品并提取商品数据返回给前端

        url:car_goodslist.php;

        参数 
              id = 前端传输过来的id  

        返回值 JSON对象商品数据;

    */

    //引入连接数据库公共文件
    include 'content.php';

    //接收前端传输过来的参数
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $class = isset($_GET['class']) ? $_GET['class'] : null;
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $qty  = isset($_GET['qty'])  ? $_GET['qty']  : 20;
    $sort = isset($_GET['sort']) ? $_GET['sort'] : 'time';
    $shop = isset($_GET['shop']) ? $_GET['shop'] : null;

    //评论
    $com = isset($_GET['comment']) ? $_GET['comment'] : null;


    

    //用户uid
    $uid = isset($_GET['uid']) ? $_GET['uid'] : null;

    //状态
    $state = isset($_GET['state']) ? $_GET['state'] : null;

    //排序索引
    $index = ($page-1)*$qty;

    if($id){
        //sql语句查询id为$id的商品
        $sql = "select * from goods where id='$id'";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $arr = array(
            'num' => count($row),
            'list' => $row,
            'class' => $class
        );
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    }else if($class){
        //查商品列表分类        
        $sql = "select * from goods where class='$class' order by $sort desc";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $arr = array(
            'num' => count($row),
            'list' => array_slice($row,$index,$qty),
            'listAll' => $row,
            'class' => $class,
            'pages' => ceil(count($row)/$qty),
            'page' => $page
        );
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
        
    }else if($uid){
        //查找用户商品
        $sql = "select * from cargoods where username='$uid' order by $sort";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }else if($state){
        //查状态商品
        $sql = "select * from goods where state='$state' order by $sort desc";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $arr = array(
            'list' => array_slice($row,$index,$qty)
        );
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }else if($com){
        //查找用户评论
        $sql = "select * from comment";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $arr = array(
            'num' => count($row),
            'list' => array_slice($row,$index,$qty),
            'pages' => ceil(count($row)/$qty),
            'page' => $page
        );
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }
    



?>
$(function(){
    //初始化请求
    var num = window.location.search.slice(4);
    var pageNo=1,qty=5,pages; 
    detlist();
    function detlist(){
        $.ajax({
            type : 'get',
            url : '../api/car_goods.php',
            data : {id:num},
            success : function(data){
                var arr = JSON.parse(data);
                console.log(arr);
                var imgs = arr.list[0].img;
                var arr2 = imgs.split(',');
                var sizes = arr.list[0].codenum.split(',');
                var color = arr.list[0].color.split(',');
                var str = `
                                <div class="container">
                                    <p class="target_location"><a href="##">首页</a> > <a href="">${arr.list[0].shop}</a> > <a href="">详情页</a></p>
                                    <!-- 放大镜 -->
                                    <div class="magnifier" id="magnifier1" style="float:left">
                                        <div class="magnifier-container">
                                            <div class="images-cover"></div>
                                            <!--当前图片显示容器-->
                                            <div class="move-view"></div>
                                            <!--跟随鼠标移动的盒子-->
                                        </div>
                                        <div class="magnifier-assembly">
                                            <div class="magnifier-btn">
                                                <span class="magnifier-btn-left">&lt;</span>
                                                <span class="magnifier-btn-right">&gt;</span>
                                            </div>
                                            <!--按钮组-->
                                            <div class="magnifier-line">
                                                <ul class="clearfix animation03">
                                                    <li>
                                                        <div class="small-img">
                                                            <img src="../image/list/${arr2[0]}" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="small-img">
                                                            <img src="../image/list/${arr2[1]}" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="small-img">
                                                            <img src="../image/list/${arr2[2]}" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="small-img">
                                                            <img src="../image/list/${arr2[3]}" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="small-img">
                                                            <img src="../image/list/${arr2[4]}" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!--缩略图-->
                                        </div>
                                        <div class="magnifier-view"></div>
                                        <!--经过放大的图片显示容器-->
                                    </div>
                                    <!-- 参数配置-->
                                    <div class="parameter">
                                        <h2>${arr.list[0].title}</h2>
                                        <div class="shop-int">
                                            <p class="shop_price">${arr.list[0].pprice}</p>
                                            <div class="codeshow">
                                                <a href="##" class="codesshow-sao"><img src="../image/list/move01.gif" alt=""></a>
                                                手机便捷购买
                                                <div class="mobile-payment">
                                                    <img src="../image/list/Mobile-payment.png " alt="">
                                                    <a href="##" class="close">&times;</a>
                                                </div>
                                            </div>
                                            <p class="evaluate"><a href="">评价（<span>48</span>）条</a> | <span>${arr.list[0].shop}</span></p>
                                        </div>
                                        <div class="shop-color">
                                            颜色:　
                                        </div>
                                        <div class="shop-size">
                                            尺码:　
                                        </div>
                                        <div class="shop-num">
                                            <span>数量:　</span>
                                            <div class="num">
                                                <input type="text" value="1" id="num">
                                                <input type="button" value="+" id="numT">
                                                <input type="button" value="-" id="numB">
                                            </div> 　
                                            <span class="num-tips">货源充足</span>
                                        </div>
                                        <div class="shop-buy">
                                            <input type="button" value="立即购买" class="go_buy">
                                            <input type="button" value="加入购物车" class="go_car">
                                        </div>
                                        <div class="shop-server"><span>7天无条件退换货</span><span>满180元免运费</span><span>梦芭莎发货</span></div>
                                    </div>
                                    <!-- 商品收藏 -->
                                    <div class="det_coll"><div class="coll_con">商品编码：<span class="shop-code">${arr.list[0].code}</span><a href="##">收藏</a></div></div>
                                </div>`;
                $('.det_parameter').html(str);
                
                //动态生成尺寸
                for(var i=0;i<sizes.length;i++){
                    $(`<span>${sizes[i]}</span>`).appendTo('.shop-size');
                }
                $('.shop-size span').eq(0).addClass('active');
                //动态切换尺寸
                $('.shop-size').on('click','span',function(){
                    $('.shop-size span').removeClass('active');
                    $(this).addClass('active');
                })
                //动态生成颜色
                for(var i=0;i<color.length;i++){
                    if(i==0){
                        $(`<span class="active" data-id="${i}"><img src="../image/list/${arr2[i*5]}" alt="">${color[i]}</span>`).appendTo('.shop-color');
                    }else{
                        $(`<span data-id="${i}"><img src="../image/list/${arr2[i*5]}" alt="">${color[i]}</span>`).appendTo('.shop-color');
                    }
                    
                }
                //动态切换颜色
                $('.shop-color').on('click','span',function(){
                    $('.shop-color span').removeClass('active');
                    $(this).addClass('active');
                    var self = this;
                    var mArr = $('.clearfix img').get();
                    $('.images-cover img').attr('src',`../image/list/${arr2[0+5*$(self).attr('data-id')]}`);
                    $('.magnifier-view img').attr('src',`../image/list/${arr2[0+5*$(self).attr('data-id')]}`);
    
                    for(var i=0;i<=mArr.length;i++){
                        $('.clearfix img').eq(i).attr('src',`../image/list/${arr2[i+5*$(self).attr('data-id')]}`)
                    }
                });
                
                //动态商品增加 以及减少
                $('#numT').click(function(){
                    var _shu = $('#num').val();
                    if(_shu>=10){
                        _shu = 10;
                        alert("商品限购10件,如果大量需要请客服联系我们");
                    }else{
                        _shu++;
                    }
                    $('#num').val(_shu);
                });
                $('#numB').click(function(){
                    var _shu = $('#num').val();
                    if(_shu<=1){
                        _shu = 1;
                        alert("商品不能小于1件");
                    }else{
                        _shu--;
                    }
                    $('#num').val(_shu);
                });
    
                //加入购物车
                $('.go_car').click(function(){
                    if($.cookie('user')){
                        $('.det_gocar').css({display:'block'});
                        $('.det_gocar small').html($("#num").val());
                        $('.con_main div').remove();
                        carInto(); 
                        Niscookie();
                    }else{
                        alert('亲！您还没有登录，麻烦先登录一下');
                        window.open("login.html");
                    }
                      
                });
                //立即购买到购物车
                $('.go_buy').click(function(){
                    carInto();
                    window.location.href="car.html";
                })
    
                //商品添加到购物车
                function carInto(){
                    $.ajax({
                        type : 'get',
                        url : '../api/in_car.php',
                        data:{
                            username : decodeURIComponent($.cookie('user')),
                            code : $('.shop-code').html(),
                            color : $('.shop-color .active').text(),
                            price : $('.shop_price').text()*1,
                            title : $('.parameter h2').html(),
                            imgurl : $('.shop-color .active img').attr('src').slice(3),
                            size : $('.shop-size .active').html(),
                            num : $('#num').val()*1,
                            shop : $('.evaluate span').eq(1).text()
                        },
                        success : function(data){
                        }
                    }) 
                }
    
                //商品放大镜
                goda();
    
                var str2 = `<li class="active"><img src="../image/list/${arr2[0]}" alt=""></li>
                            <li>
                                <div class="title">已有27人评论</div>
                                <div class="user"></div>
                            </li>
                            <li><img src="../image/list/det_zhifu.png" alt=""></li>
                            <li><img src="../image/list/det_th.jpg" alt=""></li>`;
                $('.mbs_bd').html(str2);
                comment();
            }
        });
    }
    
    function comment(){
        $.ajax({
            type : 'get',
            url : '../api/car_goods.php',
            data : {comment:'com',page:pageNo,qty:qty},
            success : function(data){
                var arr = JSON.parse(data);
                pages = arr.pages;
                $('.mbs_hd li').eq(1).html(`评价(${arr.num})`);
                $('.mbs_bd .title').html(`已有${arr.num}人评论`);
                $('.evaluate a span').html(arr.num);
                var res = arr.list.map(function(item){
                    return ` <div class="user1 user_all">
                                <div class="user_left">
                                    <div class="user_img"></div>
                                    <div class="user_name">${item.username}</div> 
                                </div>
                                <div class="user_right">
                                    <p class="content">${item.content}</p>
                                    <p class="time">${item.time}</p>
                                 </div>
                            </div>
                             `
                }).join('');
                $('.mbs_bd .user').html(res);
                $(`<div class="pages"></div>`).appendTo($('.mbs_bd li').eq(1));
                for(var i=arr.pages;i>=1;i--){
                    if(i==arr.page){
                        $(`<span class="active page">${i}</span>`).prependTo('.pages');
                    }else{
                        $(`<span class="page">${i}</span>`).prependTo('.pages');
                    } 
                }
                $('<span class="page_prev">上一页</span>').prependTo('.pages');
                $('<span class="page_next">下一页</span>').appendTo('.pages');
            }
        })
    }
    //下一页
    $('.mbs_bd').on('click','.page_next',function(){
        if(pageNo >= pages){
            alert("已经是最后一页了")
            pageNo = pages;
        }else{
            pageNo++;
            $('.pages').remove()
            comment();
        }
        
    });

    $('.mbs_bd').on('click','.page_prev',function(){
        pageNo--;
        if(pageNo < 1){
            alert("已经是第一页")
            pageNo = 1;
        }else{
            $('.pages').remove();
            comment();
        }
        
    });

    //跳转到制定的页面
    $('.mbs_bd').on('click','.page',function(){
        if($(this).html*1==pageNo){
            return;
        }else{
            pageNo = $(this).html()*1;
            $('.pages').remove();
            comment();
        }
    });
    
    
    //商品放大镜
    function goda(){
        var magnifierConfig = {
            magnifier : "#magnifier1",//最外层的大容器
            width : 500,//承载容器宽
            height : 500,//承载容器高
            moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
            zoom : 5//缩放比例
        };
        var _magnifier = magnifier(magnifierConfig);
    }
    

    //内页公共点击事件
    insClick();

    // 函数调用
    Niscookie();

    //手机支付
    $('.det_parameter').on('click','.codesshow-sao',function(){
        $('.mobile-payment').slideToggle();
    });
    $('.det_parameter').on('click','.close',function(){
        $(this).parent().slideToggle();
    });

    //详情页选项卡
    $('.mbs_hd li').on('click',function(){
        $('.mbs_hd li').removeClass('active');
        $(this).addClass('active');
        $('.mbs_bd li').hide().eq($(this).index()).show();
    });

    //关闭去购物车页面
    $('.det_gocar').on('click','.close',function(){
        $('.det_gocar').css({display:'none'});
    })
    $('.det_gocar').on('click','.nextshop',function(){
        $('.det_gocar').css({display:'none'});
    })

    //进入购物车
    $('.det_gocar').on('click','.goshop',function(){
        window.location.href="car.html";
    })

    
})
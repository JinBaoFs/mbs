$(function(){
    var sArr = getRequest();
    var str = sArr['class'];
    var sorts = sArr['sort'];
    var pageNo=1,qty=5;
    var pages;
    function showList(){
        $.ajax({
            type : 'get',
            url : '../api/car_goods.php',
            data : {class:str,page:pageNo,qty:qty,sort:sorts},
            success : function(data){
                var arr = JSON.parse(data);
                console.log(arr);
                var shops = [],cloth = [];
                arr.listAll.map(function(item){
                    shops.push(item.shop);
                    cloth.push(item.type);
                });
                var store = Dupli(shops),cloths=Dupli(cloth);
                console.log(cloths);
                pages = arr.pages;
                var searched = `您已选择: 
                            <a href="" class="list_class">${arr.class}
                                <div class="class_hide"><span>女装</span><span>男装</span></div>
                            </a>
                            > "${arr.class}"
                            <span class="list_num">共 <small>${arr.num}</small> 件相关商品</span>`;
                $('.list_searched').html(searched);
                var search = `<dl class="list_pin">
                                <dt>品牌:</dt>
                                <dd>
                                   ${getbrand(store)}
                                </dd>
                                <div class="more">更多</div>
                            </dl>
                            <dl class="list_nan">
                                <dt>${arr.class}:</dt>
                                <dd>
                                    ${getbrand(cloths)}
                                </dd>
                                <div class="more">更多</div>
                            </dl>
                            <dl class="list_model">
                                <dt>版型:</dt>
                                <dd>
                                    <a href="##">常规型</a>
                                    <a href="##">合身型</a>
                                    <a href="##">修身型</a>
                                    <a href="##">标准型</a>
                                    <a href="##">宽松型</a>
                                    <a href="##">常规款</a>
                                    <a href="##">时尚型</a>
                                    <a href="##">直筒型</a>
                                </dd>
                                <div class="more">更多</div>
                            </dl>
                            <dl class="list_tex">
                                <dt>花型:</dt>
                                <dd>
                                    <a href="##">净色</a>
                                    <a href="##">条纹</a>
                                    <a href="##">图案</a>
                                    <a href="##">格子</a>
                                    <a href="##">其它</a>
                                    <a href="##">印花</a>
                                    <a href="##">提花</a>
                                    <a href="##">间条</a>
                                    <a href="##">花案</a>
                                    <a href="##">波点</a>
                                    <a href="##">花草</a>
                                    <a href="##">动物</a>
                                    <a href="##">卡通</a>
                                </dd>
                                <div class="more">更多</div>
                            </dl>`;
                $('.list_search').html(search);
                
                var sort = `<div class="sort_left">
                                <span>综合<img src="../image/list/c_down.png" alt=""></span>
                                <span>销量<img src="../image/list/c_down.png" alt=""></span>
                                <span class="num">好评<img src="../image/list/c_down.png" alt=""></span>
                                <span class="time">最新<img src="../image/list/c_down.png" alt=""></span>
                                <span class="pprice">价格<img src="../image/list/price_0.png" alt=""></span>
                                <input type="text" placeholder="￥" class="price_one">
                                <span>至</span>
                                <input type="text" placeholder="￥" class="price_tow">
                                <span><input type="checkbox">促销商品</span>
                                <span><input type="checkbox">梦芭莎旗舰店</span>
                            </div>
                            <div class="sort_right">
                                <span>共 ${arr.num} 个商品</span>　|　
                                <strong>${arr.page}/${arr.pages}</strong>
                                <a href="##" class="sort_prev">&lt;</a>
                                <a href="##" class="sort_next">&gt;</a>
                            </div>`;
                $('.list_sort').html(sort); 
                var goods = arr.list.map(function(item){
                    var imgs = item.img.split(',');
                    var sizes = item.codenum.split(',');
                    var color = item.color.split(',');
                    return `<li data-id="${item.id}">
                                <div class="box_img">
                                    <img src="../image/list/${imgs[0]}" alt="">
                                    <div class="size">尺寸：${listSize(sizes)}</div>
                                </div>
                                <div class="sma_img">
                                    ${listImg(color,imgs)}
                                </div>
                                <div class="price">
                                    <span class="pprice">${item.pprice}</span>
                                    ${has(item.oprice)}
                                </div>
                                <div class="title whole_dan">${item.title}</div>
                                <div class="shop">${item.shop}</div>
                                <div class="comment">评论<span>${item.num}条</span></div>
                            </li>`;
                });

                
                /*判断是否存在原价*/
                function has(op){
                    if(op){
                        return `<span class="oprice">${op}</span>`;
                    }else{
                        return '';
                    }
                }
                /*动态生成小图片*/
                function listImg(obj,obj2){
                    var html = '';
                    for(var i=0;i<obj.length;i++){
                        html+=`<span><img src="../image/list/${obj2[i*6]}" alt=""></span>`
                    }
                    return html;
                }
                /*动态生成尺寸的大小*/
                function listSize(obj){
                    var str = '';
                    for(var i=0;i<obj.length;i++){
                        str +=`<span>${obj[i]}</span>`
                    }
                    return str;
                }
                $('.list_goods ul').html(goods);
                
                //动态生成分页
                var list_page = `<strong>${arr.page}/${arr.pages}</strong>`;
                $('.list_page').html(list_page);
                for(var i=arr.pages;i>=1;i--){
                    if(i==arr.page){
                        $(`<span class="active page">${i}</span>`).prependTo('.list_page');
                    }else{
                        $(`<span class="page">${i}</span>`).prependTo('.list_page');
                    }
                }
                $('<span class="page_prev">上一页</span>').prependTo('.list_page');
                $('<span class="page_next">下一页</span>').appendTo('.list_page');

        
                /*点击跳转到详情页*/
                $('.list_goods ul li').on('click',function(){
                    window.location.href = `details.html?id=` + this.dataset.id;
                });

                //点击店铺发起请求
                $('.list_pin').on('click','a',function(){
                    $('.list_pin a').css({background:'none',color:'#222'});
                    $(this).css({background:'#222',color:'#fff'});
                    $.ajax({
                        type : 'get',
                        url : '../api/car_goods.php',
                        data : {shop:$(this).html(),class:str},
                        success : function(data){
                            var arr = JSON.parse(data);
                            console.log(arr);
                        }
                    })
                })

                
                //判断是否存在某个class
                for(var key in sArr){
                    if($('.sort_left span').hasClass(`${sArr[key]}`)){
                        $(`.sort_left .${sArr[key]}`).addClass('active');
                    }
                }
                if(arr.pages>1){
                    $('.list_page').css({display:'block'});
                }
                
                listArr();//渲染之后的页面调用
            }
        })
    }
    //初始化头部请求
    showList();
    //排序事件
    $('.list_sort').on('click','.pprice',function(){
        window.location.href= 'list.html?class='+str+'&sort=pprice';
        scroll();
    });
    $('.list_sort').on('click','.time',function(){
        window.location.href= 'list.html?class='+str+'&sort=time';
    });
    $('.list_sort').on('click','.num',function(){
        window.location.href= 'list.html?class='+str+'&sort=num';
    });

    //下一页
    $('.list_sort').on('click','.sort_next',function(){
        if(pageNo >= pages){
            alert("已经是最后一页了")
            pageNo = pages;
        }else{
            pageNo++;
            showList();
        }
        
    });
    $('.list_page').on('click','.page_next',function(){
        if(pageNo >= pages){
            alert("已经是最后一页了")
            pageNo = pages;
        }else{
            pageNo++;
            showList();
        }
        
    });

    //上一页
    $('.list_sort').on('click','.sort_prev',function(){
        pageNo--;
        if(pageNo < 1){
            alert("已经是第一页")
            pageNo = 1;
        }else{
            showList();
        }
        
    });
    $('.list_page').on('click','.page_prev',function(){
        pageNo--;
        if(pageNo < 1){
            alert("已经是第一页")
            pageNo = 1;
        }else{
            showList();
        }
        
    });

    //跳转到制定的页面
    $('.list_page').on('click','.page',function(){
        if($(this).html*1==pageNo){
            return;
        }else{
            pageNo = $(this).html()*1;
            showList();
        }
    });

    //动态生成店铺 以及排序索引
    function getbrand(obj){
        var res = '';
        for(var i=0;i<obj.length;i++){
            res +=`<a href="javascript:;">${obj[i]}</a>`;
        }
        return res;
    }

    
    //内页公共点击事件
    insClick();

    // 函数调用
    Niscookie();
})

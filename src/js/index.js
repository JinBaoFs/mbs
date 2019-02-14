//首页功能
function indexWork(){
    
    //回到顶部功能
    $('.aside_top').click(goTop);

    //退出登录
    $('.sign_out').click(function(){
        alert("退出成功");
        $.cookie('user', null, { expires: -1, path: '/' });
        window.location.reload();

    });
    //函数调用部分
    Wiscookie();//初始化渲染判断用户是否登录
    indexlick()//渲染猜你喜欢板块
}

// 渲染猜你喜欢
function indexlick(){
    $.ajax({
        type: 'get',
        url : 'api/car_goods.php',
        data: {state:'like'},
        success : function(data){
            var arr = JSON.parse(data);
            var res = arr.list.map(function(item){
                var imgs = item.img.split(',');
                return `<li data-id="${item.id}">
                            <div class="lk_imgs"><img src="image/list/${imgs[0]}" alt=""></div>
                            <div class="lk_title whole_dan">${item.title}</div>
                            <div class="lk_price"><span class="lk_pprice">${item.pprice}</span><span class="lk_oprice">${item.oprice}</span><a href="##">购买</a></div>
                        </li>`;
            }).join('');
            $('.likegoods').html(res);
        }
    })
}


//首页点击事件
function indexClick(){
    //跳转到登录页
    $('.go_login').click(function(){
        //跳转登陆页前 把当前的地址设置为零时cookie
        $.cookie('adreess', window.location.href, { path: '/' });
        window.location.href='html/login.html';
    })
    $('.login').click(function(){
        //跳转登陆页前 把当前的地址设置为零时cookie
        $.cookie('adreess', window.location.href, { path: '/' });
        window.location.href='html/login.html';
    })
    //去注册页
    $('.go_reg').click(function(){
        window.location.href="html/reg.html";
    });
    //优选专区跳转到购物车
    $('.shop_you li').on('click',function(){
        window.open(`html/details.html?id=` + this.dataset.id);
    });
    //点击分类跳转到列表页
    $('.goods_fen').on('click',function(){
        var url = "html/list.html?class=" + $(this).children('h3').children('a').html()+"&sort=time";
        window.open(url);
    });

    //跳转到购物车页
    $('.car_btn').click(function(){
        window.location.href="html/car.html";
    });
    $('.state_order').click(function(){
        window.location.href="html/car.html";
    });

    //删除商品
    $('.aside_car').on('click','.car_dleBtn',function(){
        var cans={
            username:decodeURIComponent($.cookie('user')),
            title : $(this).prev().prev().prev().html(),
            shop : $(this).parent().parent().parent().prev().html(),
            size : $(this).prev().prev().children('span').eq(0).html(),
            color : $(this).prev().prev().children('span').eq(1).html(),
        }

        $.ajax({
            type : 'get',
            url : 'api/del_goods.php',
            data : cans,
            success : function(data){  
                if(data*1){
                    $('.con_main div').remove();
                    Wiscookie();
                }
            }
            
        })
        $(this).parent().parent().remove();
    });

    //猜你喜欢商品点击跳转
    $('.like').on('click','li',function(){
        window.open("html/details.html?id="+$(this).attr('data-id'));
    })

    
}

//内页公用点击事件
function insClick(){
    //回到顶部功能
    $('.aside_top').click(goTop);

    //跳转到登录页
    $('.go_login').click(function(){
        //跳转登陆页前 把当前的地址设置为零时cookie
        $.cookie('adreess', window.location.href, { path: '/' });
        window.location.href='login.html';
    })
    $('.login').click(function(){
        //跳转登陆页前 把当前的地址设置为零时cookie
        $.cookie('adreess', window.location.href, { path: '/' });
        window.location.href='login.html';
    })
    
    //去注册页
    $('.go_reg').click(function(){
        window.location.href="reg.html";
    });

    //跳转到购物车页
    $('.car_btn').click(function(){
        window.location.href="car.html";
    });
    $('.state_order').click(function(){
        window.location.href="car.html";
    });

    //删除商品
    $('.aside_car').on('click','.car_dleBtn',function(){
        var cans={
            username:decodeURIComponent($.cookie('user')),
            title : $(this).prev().prev().prev().html(),
            shop : $(this).parent().parent().parent().prev().html(),
            size : $(this).prev().prev().children('span').eq(0).html(),
            color : $(this).prev().prev().children('span').eq(1).html(),
        }

        $.ajax({
            type : 'get',
            url : '../api/del_goods.php',
            data : cans,
            success : function(data){  
                if(data*1){
                    $('.con_main div').remove();
                    Niscookie();
                }
            }
            
        })
        $(this).parent().parent().remove();
    });
    //退出登录
    $('.sign_out').click(function(){
        alert("退出成功");
        $.cookie('user', null, { expires: -1, path: '/' });
        window.location.reload();
    });
}


//首页判断用户是否存在
function Wiscookie(){ 
    if($.cookie('user')){
        hasUid();
        $.ajax({
            type : 'get',
            url : 'api/car_goods.php',
            data : {uid:decodeURIComponent($.cookie('user'))},
            success: function(data){
                WasideCar(data);
            }
        })
    }
}
//内页判断用户是否存在
function Niscookie(){ 
    if($.cookie('user')){
        hasUid();
        $.ajax({
            type : 'get',
            url : '../api/car_goods.php',
            data : {uid:decodeURIComponent($.cookie('user'))},
            success: function(data){
                NasideCar(data);
            }
        })
    }
}


//如果cookie存在用户页面该有的状态
function hasUid(){
    $('.login').css({display:'none'}).next().css({display:'none'}).next().css({display:'inline-block'});
    $(`<a href="javascript:;" class="user">您好,${decodeURIComponent($.cookie('user'))}</a>`).prependTo('.toll_right');
    $('.state_not').css({display:'none'}).next().css({display:'block'});
    $('.aside_user').html(decodeURIComponent($.cookie('user')));
    $('.car_empty').css({display:'none'});
}


//首页渲染侧栏购物车
function WasideCar(and){
    var arr = JSON.parse(and);
    if(arr.length>0){
        $('#car_empty').css({display:'none'});
        var arr1 = [],shopNum=0,total=0;
        arr.map(function(item){
            arr1.push(item.shop);
            shopNum +=item.num*1;
            total += item.num*item.money;
        });
        //设置相关数量和价格
        $('.car_num span').html(shopNum);
        $('.foot_num').html(`共${shopNum}件商品`);
        $('.foot_price').html(total);
        
        var shops = Dupli(arr1);//对arr1进行数组去重
        for(var i=0;i<shops.length;i++){
            $(`<div class="goods" data-shop="${shops[i]}"><div class="title">${shops[i]}</div><ul>${hasshop(shops[i])}</ul></div>`).prependTo('.con_main');
        }
    }else{
        $('#car_empty').css({display:'block'});
        $('.car_num span').html(0);
        $('.foot_num').html(`共0件商品`);
        $('.foot_price').html(0);
    }
    //根据店铺名进行分类
    function hasshop(obj){
        var str=""
        str = arr.map(function(item){
            if(item.shop == obj){
                return `<li data-id="${item.id}">
                            <div class="car_img">
                                <img src="${item.imgurl}" alt="">
                            </div>
                            <div class="carLi_text">
                                <p class="whole_dan">${item.title}</p>
                                <p><span>${item.size}</span><span>${item.color}</span></p>
                                <p><span class="car_price">${item.money}</span>*${item.num}</p>
                                <a href="##" class="car_dleBtn">删除</a>
                            </div>
                        </li>`;
            }
        }).join('');
        return str;
    }
}
//内页渲染侧栏购物车
function NasideCar(and){
    var arr = JSON.parse(and);
    if(arr.length>0){
        $('#car_empty').css({display:'none'});
        var arr1 = [],shopNum=0,total=0;
        arr.map(function(item){
            arr1.push(item.shop);
            shopNum +=item.num*1;
            total += item.num*item.money;
        });
        //设置相关数量和价格
        $('.car_num span').html(shopNum);
        $('.foot_num').html(`共${shopNum}件商品`);
        $('.foot_price').html(total);
        
        var shops = Dupli(arr1);//对arr1进行数组去重
        for(var i=0;i<shops.length;i++){
            $(`<div class="goods" data-shop="${shops[i]}"><div class="title">${shops[i]}</div><ul>${hasshop(shops[i])}</ul></div>`).prependTo('.con_main');
        }
    }else{
        $('#car_empty').css({display:'block'});
        $('.car_num span').html(0);
        $('.foot_num').html(`共0件商品`);
        $('.foot_price').html(0);
    }
    //根据店铺名进行分类
    function hasshop(obj){
        var str=""
        str = arr.map(function(item){
            if(item.shop == obj){
                return `<li data-id="${item.id}">
                            <div class="car_img">
                                <img src="../${item.imgurl}" alt="">
                            </div>
                            <div class="carLi_text">
                                <p class="whole_dan">${item.title}</p>
                                <p><span>${item.size}</span><span>${item.color}</span></p>
                                <p><span class="car_price">${item.money}</span>*${item.num}</p>
                                <a href="##" class="car_dleBtn">删除</a>
                            </div>
                        </li>`;
            }
        }).join('');
        return str;
    }
}


/*轮播图封装*/
function indexSlide(ele){
    var box = document.querySelector(ele);
    var list = box.children[0];
    var Imgs = list.children;
    var len = Imgs.length;
    var wd = Imgs[0].clientWidth;
    var index = 0;
    var timer = null;

    var btn = document.createElement('div');
    btn.className = 'btn';
    for(var i=0;i<len;i++){
        var span = document.createElement('span');
        btn.appendChild(span);
    }

    box.appendChild(btn);
    var spans = btn.children;spans[0].className ="active";

    for(let i=0;i<len;i++){
        spans[i].onclick = function(){
            for(var k=0;k<len;k++){
                spans[k].className = '';
            }
            this.className = 'active';
            index = i;
            list.style.left = -(index * wd) + 'px';
        } 
    }

    timer = setInterval(move,3000);

    function move(){
        index++;
        if(index>=len){
            index = 0;
        }
        list.style.left = -(index*wd)+'px';
        getBtn();
    }
    function getBtn(){
        for(var i=0;i<len;i++){
            if(index == i){
                spans[i].className = 'active';
            }else{
                spans[i].className = '';
            }
        }
    }

    box.onmouseover = ()=>clearInterval(timer);
    box.onmouseout = ()=>timer=setInterval(move,3000);
}


/*回到顶部*/
function goTop(){
    $('html,body').animate({
        scrollTop: 0
    }, 200);
}


/*头部参数转码问题*/
function getRequest() {   
    var url = window.location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
       var str = url.substr(1);   
       strs = str.split("&");   
       for(var i = 0; i < strs.length; i ++) {   
           //就是这句的问题
          theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
          //之前用了unescape()
          //才会出现乱码  
       }   
    }   
    return theRequest;   
}


/*列表页渲染页面之后的功能*/
function listArr(){
    //点击让头部搜索的高度自动
    $('.list_search dl').on('click','.more',function(){
        $(this).parent().toggleClass('auto');
    })
    //鼠标经过让大图片影藏的尺寸显示
    $('.sma_img img').on('mouseenter',function(){
        $(this).css({border:'1px #e60063 solid'});
        $(this).parent().parent().prev().children('img').attr('src',`${this.src}`).next().css({display:'block'});
    });
    $('.sma_img img').on('mouseleave',function(){
        $(this).css({border:'1px #000 solid'});
        $(this).parent().parent().prev().children('img').attr('src',`${this.src}`).next().css({display:'none'});
    });
}


/*正则封装*/
var RegObj = {
    //账户正则
    act : function(str){
        var reg  = /^\w{5,18}$/
        return reg.test(str);
    },
    //中文文字开头正则
    cha : function(str){
        var reg = /^[\u4e00-\u9fa5]+$/;
        return reg.test(str);
    },
    //手机号码正则
    tel : function(str){
        var reg = /^1(3|4|5|7|8)\d{9}$/;
        return reg.test(str);
    },
    // 邮箱正则
    email : function(str){
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return reg.test(str);
    },
    // 身份证正则
    ID : function(str){
        var reg = /^\d{15}|\d{18}$/;
        return reg.test(str);
    },
    // 生日正则
    bth : function(str){
        var reg = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        return reg.test(str);
    },
    //密码正则
    psw : function(str){
        var reg = /^\d{6,18}$/;
        return reg.test(str);
    }
    
}


/*随机生成*/
function randomNum(num){
    var str = "";
    for(var i=0;i<num;i++){
        str += parseInt(Math.random()*10);
    }
    return str;
}


/*数组去重*/
function Dupli(obj){
    var res = [];
    for(var i=0;i<obj.length;i++) {
        var items=obj[i];
        　//判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
        if($.inArray(items,res)==-1) {
        　　　res.push(items);
        }
    }
    return res;
}



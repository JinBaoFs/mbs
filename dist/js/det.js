"use strict";$(function(){var e,s=window.location.search.slice(4),i=1,a=5;function d(){$.ajax({type:"get",url:"../api/car_goods.php",data:{comment:"com",page:i,qty:a},success:function(s){var i=JSON.parse(s);e=i.pages,$(".mbs_hd li").eq(1).html("评价("+i.num+")"),$(".mbs_bd .title").html("已有"+i.num+"人评论"),$(".evaluate a span").html(i.num);var a=i.list.map(function(s){return' <div class="user1 user_all">\n                                <div class="user_left">\n                                    <div class="user_img"></div>\n                                    <div class="user_name">'+s.username+'</div> \n                                </div>\n                                <div class="user_right">\n                                    <p class="content">'+s.content+'</p>\n                                    <p class="time">'+s.time+"</p>\n                                 </div>\n                            </div>\n                             "}).join("");$(".mbs_bd .user").html(a),$('<div class="pages"></div>').appendTo($(".mbs_bd li").eq(1));for(var n=i.pages;1<=n;n--)n==i.page?$('<span class="active page">'+n+"</span>").prependTo(".pages"):$('<span class="page">'+n+"</span>").prependTo(".pages");$('<span class="page_prev">上一页</span>').prependTo(".pages"),$('<span class="page_next">下一页</span>').appendTo(".pages")}})}$.ajax({type:"get",url:"../api/car_goods.php",data:{id:s},success:function(s){var i=JSON.parse(s);console.log(i);var a=i.list[0].img,n=a.split(","),e=i.list[0].codenum.split(","),l=i.list[0].color.split(","),t='\n                                <div class="container">\n                                    <p class="target_location"><a href="##">首页</a> > <a href="">'+i.list[0].shop+'</a> > <a href="">详情页</a></p>\n                                    \x3c!-- 放大镜 --\x3e\n                                    <div class="magnifier" id="magnifier1" style="float:left">\n                                        <div class="magnifier-container">\n                                            <div class="images-cover"></div>\n                                            \x3c!--当前图片显示容器--\x3e\n                                            <div class="move-view"></div>\n                                            \x3c!--跟随鼠标移动的盒子--\x3e\n                                        </div>\n                                        <div class="magnifier-assembly">\n                                            <div class="magnifier-btn">\n                                                <span class="magnifier-btn-left">&lt;</span>\n                                                <span class="magnifier-btn-right">&gt;</span>\n                                            </div>\n                                            \x3c!--按钮组--\x3e\n                                            <div class="magnifier-line">\n                                                <ul class="clearfix animation03">\n                                                    <li>\n                                                        <div class="small-img">\n                                                            <img src="../image/list/'+n[0]+'" />\n                                                        </div>\n                                                    </li>\n                                                    <li>\n                                                        <div class="small-img">\n                                                            <img src="../image/list/'+n[1]+'" />\n                                                        </div>\n                                                    </li>\n                                                    <li>\n                                                        <div class="small-img">\n                                                            <img src="../image/list/'+n[2]+'" />\n                                                        </div>\n                                                    </li>\n                                                    <li>\n                                                        <div class="small-img">\n                                                            <img src="../image/list/'+n[3]+'" />\n                                                        </div>\n                                                    </li>\n                                                    <li>\n                                                        <div class="small-img">\n                                                            <img src="../image/list/'+n[4]+'" />\n                                                        </div>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            \x3c!--缩略图--\x3e\n                                        </div>\n                                        <div class="magnifier-view"></div>\n                                        \x3c!--经过放大的图片显示容器--\x3e\n                                    </div>\n                                    \x3c!-- 参数配置--\x3e\n                                    <div class="parameter">\n                                        <h2>'+i.list[0].title+'</h2>\n                                        <div class="shop-int">\n                                            <p class="shop_price">'+i.list[0].pprice+'</p>\n                                            <div class="codeshow">\n                                                <a href="##" class="codesshow-sao"><img src="../image/list/move01.gif" alt=""></a>\n                                                手机便捷购买\n                                                <div class="mobile-payment">\n                                                    <img src="../image/list/Mobile-payment.png " alt="">\n                                                    <a href="##" class="close">&times;</a>\n                                                </div>\n                                            </div>\n                                            <p class="evaluate"><a href="">评价（<span>48</span>）条</a> | <span>'+i.list[0].shop+'</span></p>\n                                        </div>\n                                        <div class="shop-color">\n                                            颜色:　\n                                        </div>\n                                        <div class="shop-size">\n                                            尺码:　\n                                        </div>\n                                        <div class="shop-num">\n                                            <span>数量:　</span>\n                                            <div class="num">\n                                                <input type="text" value="1" id="num">\n                                                <input type="button" value="+" id="numT">\n                                                <input type="button" value="-" id="numB">\n                                            </div> 　\n                                            <span class="num-tips">货源充足</span>\n                                        </div>\n                                        <div class="shop-buy">\n                                            <input type="button" value="立即购买" class="go_buy">\n                                            <input type="button" value="加入购物车" class="go_car">\n                                        </div>\n                                        <div class="shop-server"><span>7天无条件退换货</span><span>满180元免运费</span><span>梦芭莎发货</span></div>\n                                    </div>\n                                    \x3c!-- 商品收藏 --\x3e\n                                    <div class="det_coll"><div class="coll_con">商品编码：<span class="shop-code">'+i.list[0].code+'</span><a href="##">收藏</a></div></div>\n                                </div>';$(".det_parameter").html(t);for(var c=0;c<e.length;c++)$("<span>"+e[c]+"</span>").appendTo(".shop-size");$(".shop-size span").eq(0).addClass("active"),$(".shop-size").on("click","span",function(){$(".shop-size span").removeClass("active"),$(this).addClass("active")});for(var c=0;c<l.length;c++)0==c?$('<span class="active" data-id="'+c+'"><img src="../image/list/'+n[5*c]+'" alt="">'+l[c]+"</span>").appendTo(".shop-color"):$('<span data-id="'+c+'"><img src="../image/list/'+n[5*c]+'" alt="">'+l[c]+"</span>").appendTo(".shop-color");function o(){$.ajax({type:"get",url:"../api/in_car.php",data:{username:decodeURIComponent($.cookie("user")),code:$(".shop-code").html(),color:$(".shop-color .active").text(),price:1*$(".shop_price").text(),title:$(".parameter h2").html(),imgurl:$(".shop-color .active img").attr("src").slice(3),size:$(".shop-size .active").html(),num:1*$("#num").val(),shop:$(".evaluate span").eq(1).text()},success:function(s){}})}$(".shop-color").on("click","span",function(){$(".shop-color span").removeClass("active"),$(this).addClass("active");var s=this,i=$(".clearfix img").get();$(".images-cover img").attr("src","../image/list/"+n[0+5*$(s).attr("data-id")]),$(".magnifier-view img").attr("src","../image/list/"+n[0+5*$(s).attr("data-id")]);for(var a=0;a<=i.length;a++)$(".clearfix img").eq(a).attr("src","../image/list/"+n[a+5*$(s).attr("data-id")])}),$("#numT").click(function(){var s=$("#num").val();10<=s?(s=10,alert("商品限购10件,如果大量需要请客服联系我们")):s++,$("#num").val(s)}),$("#numB").click(function(){var s=$("#num").val();s<=1?(s=1,alert("商品不能小于1件")):s--,$("#num").val(s)}),$(".go_car").click(function(){$.cookie("user")?($(".det_gocar").css({display:"block"}),$(".det_gocar small").html($("#num").val()),$(".con_main div").remove(),o(),Niscookie()):(alert("亲！您还没有登录，麻烦先登录一下"),window.open("login.html"))}),$(".go_buy").click(function(){o(),window.location.href="car.html"}),magnifier({magnifier:"#magnifier1",width:500,height:500,moveWidth:null,zoom:5});var p='<li class="active"><img src="../image/list/'+n[0]+'" alt=""></li>\n                            <li>\n                                <div class="title">已有27人评论</div>\n                                <div class="user"></div>\n                            </li>\n                            <li><img src="../image/list/det_zhifu.png" alt=""></li>\n                            <li><img src="../image/list/det_th.jpg" alt=""></li>';$(".mbs_bd").html(p),d()}}),$(".mbs_bd").on("click",".page_next",function(){e<=i?(alert("已经是最后一页了"),i=e):(i++,$(".pages").remove(),d())}),$(".mbs_bd").on("click",".page_prev",function(){--i<1?(alert("已经是第一页"),i=1):($(".pages").remove(),d())}),$(".mbs_bd").on("click",".page",function(){1*$(this).html!=i&&(i=1*$(this).html(),$(".pages").remove(),d())}),insClick(),Niscookie(),$(".det_parameter").on("click",".codesshow-sao",function(){$(".mobile-payment").slideToggle()}),$(".det_parameter").on("click",".close",function(){$(this).parent().slideToggle()}),$(".mbs_hd li").on("click",function(){$(".mbs_hd li").removeClass("active"),$(this).addClass("active"),$(".mbs_bd li").hide().eq($(this).index()).show()}),$(".det_gocar").on("click",".close",function(){$(".det_gocar").css({display:"none"})}),$(".det_gocar").on("click",".nextshop",function(){$(".det_gocar").css({display:"none"})}),$(".det_gocar").on("click",".goshop",function(){window.location.href="car.html"})});
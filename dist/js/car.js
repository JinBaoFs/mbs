"use strict";$(function(){function o(n){0<n.length?$(".settlement").css({background:"#e50065"}):$(".settlement").css({background:"#ccc"})}function p(){var n=0,s=0;$(".con_tow input:checkbox:checked").each(function(){n+=1*$(this).parents("dl").children(".dtotal").html(),s+=1*$(this).parents("dl").children(".dnum").children("input").val()}),$(".tp span").eq(1).html(n),$(".tp span").eq(0).html(s)}insClick(),Niscookie(),$.cookie("user")?$.ajax({type:"get",url:"../api/car_goods.php",data:{uid:decodeURIComponent($.cookie("user"))},success:function(n){var s,e,t=JSON.parse(n);if(console.log(t),0<t.length){var c=function(s){return t.map(function(n){if(n.shop==s)return'<div class="shops">\n                                            <dl>\n                                                <dt><input type="checkbox"></dt>\n                                                <dd class="dshop">\n                                                    <span class="span_left"><a href=""><img src="../'+n.imgurl+'" alt=""></a></span>\n                                                    <span class="span_right">\n                                                        <span>'+n.title+'</span>\n                                                        <span>尺寸：<small class="size">'+n.size+'</small>　颜色：<small class="color">'+n.color+'</small></span>\n                                                    </span>\n                                                </dd>\n                                                <dd class="dprice">'+n.money+'</dd>\n                                                <dd class="dnum">\n                                                    <a href="javascript:;" class="numB">-</a>\n                                                    <input type="button" value="'+n.num+'" id="numC">\n                                                    <a href="javascript:;" class="numT">+</a>\n                                                </dd>\n                                                <dd class="dtotal">'+n.money*n.num+'</dd>\n                                                <dd class="doper">\n                                                    <a href="##" class="car_del">移除</a>\n                                                </dd>\n                                            </dl>\n                                        </div>'}).join("")};$(".con_one").css({display:"none"});var a=[];t.map(function(n){a.push(n.shop)});for(var l=Dupli(a),i=0;i<l.length;i++)$('<div class="store" data-shop="'+l[i]+'"><div class="title">以下商品由以下商品由 '+l[i]+" 发货免配送费</div>"+c(l[i])+"</div>").appendTo(".con_tow");s=$(".con_tow .shops :checkbox"),e=s.filter(":checked"),$("#all").click(function(){s.prop("checked",this.checked),o(e=s.filter(":checked")),p()}),$(".con_tow .shops :checkbox").click(function(){e=s.filter(":checked"),$("#all").prop("checked",e.length===s.length),o(e),p()}),$(".con_tow").on("click",".numB",function(){1*$(this).next().val()<=1?($(this).next().val(1),alert("商品数量最为一件")):($(this).next().val(1*$(this).next().val()-1),$(this).parent().next().html($(this).parent().prev().html()*$(this).next().val()),p())}),$(".con_tow").on("click",".numT",function(){10<=1*$(this).prev().val()?($(this).prev().val(10),alert("商品限购10件")):($(this).prev().val(1*$(this).prev().val()+1),$(this).parent().next().html($(this).parent().prev().html()*$(this).prev().val()),p())}),$(".con_tow").on("click",".car_del",function(){var n=confirm("是否删除该商品?");if(n){var s={username:decodeURIComponent($.cookie("user")),title:$(this).parent().siblings(".dshop").children("span").eq(1).children("span").eq(0).html(),shop:$(this).parents(".store").attr("data-shop"),size:$(this).parent().siblings(".dshop").children("span").eq(1).children("span").eq(1).children(".size").html(),color:$(this).parent().siblings(".dshop").children("span").eq(1).children("span").eq(1).children(".color").html()};console.log(s),$.ajax({type:"get",url:"../api/del_goods.php",data:s,success:function(n){1*n&&$(".con_main div").remove()}}),$(this).parents(".shops").remove(),p()}})}else $(".sett").css({display:"none"})}}):($(".con_tow").css({display:"none"}),$(".sett").css({display:"none"}))});
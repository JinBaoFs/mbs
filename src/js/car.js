$(function(){

    insClick();//内页公共点击事件
    Niscookie();// 函数调用
    

    if($.cookie('user')){
        $.ajax({
            type : 'get',
            url : '../api/car_goods.php',
            data : {uid:decodeURIComponent($.cookie('user'))},
            success: function(data){
                var arr = JSON.parse(data);
                console.log(arr);
                if(arr.length>0){
                    $('.con_one').css({display:'none'});
                    var arr1 = [];
                    //
                    arr.map(function(item){arr1.push(item.shop);});
                    var shops = Dupli(arr1);
                    for(var i=0;i<shops.length;i++){
                        $(`<div class="store" data-shop="${shops[i]}"><div class="title">以下商品由以下商品由 ${shops[i]} 发货免配送费</div>${carshop(shops[i])}</div>`).appendTo('.con_tow');
                    }
                    carInit();

                    //对产品进行分类
                    function carshop(obj){
                        var str=""
                        str = arr.map(function(item){
                            if(item.shop == obj){
                                return `<div class="shops">
                                            <dl>
                                                <dt><input type="checkbox"></dt>
                                                <dd class="dshop">
                                                    <span class="span_left"><a href=""><img src="../${item.imgurl}" alt=""></a></span>
                                                    <span class="span_right">
                                                        <span>${item.title}</span>
                                                        <span>尺寸：<small class="size">${item.size}</small>　颜色：<small class="color">${item.color}</small></span>
                                                    </span>
                                                </dd>
                                                <dd class="dprice">${item.money}</dd>
                                                <dd class="dnum">
                                                    <a href="javascript:;" class="numB">-</a>
                                                    <input type="button" value="${item.num}" id="numC">
                                                    <a href="javascript:;" class="numT">+</a>
                                                </dd>
                                                <dd class="dtotal">${item.money*item.num}</dd>
                                                <dd class="doper">
                                                    <a href="##" class="car_del">移除</a>
                                                </dd>
                                            </dl>
                                        </div>`;
                            }
                        }).join('');
                        return str;
                        
                    }
                }else{
                    $('.sett').css({display:'none'});
                }
            }
        })
    }else{
        $('.con_tow').css({display:'none'});
        $('.sett').css({display:'none'});
    }

    //购物车页功能
    function carInit(){
        //全选
        var $checkbox = $('.con_tow .shops :checkbox');
        var $checked = $checkbox.filter(':checked');
        $('#all').click(function(){
            $checkbox.prop('checked',this.checked);
            $checked = $checkbox.filter(':checked');
            hascheck($checked);
            smatotal();
        })

        $('.con_tow .shops :checkbox').click(function(){
            $checked = $checkbox.filter(':checked');
            $('#all').prop('checked',$checked.length === $checkbox.length);
            hascheck($checked);
            smatotal()
        })   

        //数量增加 减少
        $('.con_tow').on('click','.numB',function(){
            if($(this).next().val()*1<=1){
                $(this).next().val(1);
                alert('商品数量最为一件');
            }else{
                $(this).next().val($(this).next().val()*1-1);
                $(this).parent().next().html($(this).parent().prev().html()*$(this).next().val());
                smatotal();
            }
        })
        $('.con_tow').on('click','.numT',function(){
            if($(this).prev().val()*1>=10){
                $(this).prev().val(10);
                alert('商品限购10件');
            }else{
                $(this).prev().val($(this).prev().val()*1+1);
                $(this).parent().next().html($(this).parent().prev().html()*$(this).prev().val());
                smatotal();
            }
            
        })

        //商品的删除
        $('.con_tow').on('click','.car_del',function(){
            var sta = confirm('是否删除该商品?');
            if(sta){
                var cans={
                    username:decodeURIComponent($.cookie('user')),
                    title : $(this).parent().siblings('.dshop').children('span').eq(1).children('span').eq(0).html(),
                    shop : $(this).parents('.store').attr('data-shop'),
                    size : $(this).parent().siblings('.dshop').children('span').eq(1).children('span').eq(1).children('.size').html(),
                    color : $(this).parent().siblings('.dshop').children('span').eq(1).children('span').eq(1).children('.color').html()
                }
                console.log(cans);
        
                $.ajax({
                    type : 'get',
                    url : '../api/del_goods.php',
                    data : cans,
                    success : function(data){  
                        if(data*1){
                            $('.con_main div').remove();
                        }
                    }
                    
                })
                $(this).parents('.shops').remove();
                smatotal();
            }
        })

        
      
    }

    //去结算的颜色
    function hascheck(obj){
        if(obj.length>0){
            $('.settlement').css({background:'#e50065'});
        }else{
            $('.settlement').css({background:'#ccc'});
        }
    }

    //小计
    function smatotal(){
        var str = 0;
        var num = 0;
        $('.con_tow input:checkbox:checked').each(function(){
            str += $(this).parents('dl').children('.dtotal').html()*1;
            num += $(this).parents('dl').children('.dnum').children('input').val()*1;
        })
        $('.tp span').eq(1).html(str);
        $('.tp span').eq(0).html(num);
    }


})
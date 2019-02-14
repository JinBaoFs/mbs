//登录页功能

$(function(){

    //跳转到注册页面
    $('.go_reg').click(function(){
        window.location.href="reg.html";
    });

    //随机验证码
    var success = {display : 'block',color:'#58bc58',"background-position":"1px -22px"};//成功状态信息样式
    var fail = {display : 'block',color:'#e50065',"background-position":"1px 3px"};//失败状态信息样式
    $('.yzm_con').html(randomNum(4));
    $('.yzm_con').click(function(){
        $(this).html(randomNum(4));
    });
    $('.yzm_slide').click(function(){
        $(this).prev().prev().html(randomNum(4));
    })
    $('#yzm').blur(function(){
        if($(this).val()){
            if($(this).val()==$(this).next().text()){
                $(this).next().next().css(success).html("验证码正确");
                sta2 = true;
            }else{
                $(this).next().next().css(fail).html("验证码不正确");
                sta2 = false;
            }
        }else{
            $(this).next().next().css(fail).html('验证码不能为空');
            sta2 = false;
        }
    })

    //非空验证
    $('#btn_login').click(function(){
        if($("#login_user").val() && $("#login_psw").val()){
            $.ajax({
                type : 'post',
                url : '../api/login.php',
                data : {username:$("#login_user").val(),password:$('#login_psw').val()},
                success : function(data){
                    var uid = $('#login_user').val();
                    if(data*1){
                        alert("登录成功");
                        //登陆成功设置临时cookie'user'为用户名uid
                        $.cookie('user', uid, { expires: 7, path: '/' });
                        window.location.href=$.cookie('adreess');//登陆成功后前往上一次登陆的页面
                    }else{
                        $("#login_psw").next().html("账号或者密码错误");
                        $("#login_user").next().html("账号或者密码错误");
                        $("#login_user").next().css(fail);
                        $("#login_psw").next().css(fail);
                    }
                }
            })
        }else{
            $("#login_user").next().html("账户不能为空");
            $("#login_user").next().css(fail);
            $("#login_psw").next().html("密码不能为空");
            $("#login_psw").next().css(fail);
        }
    });

    $("#login_user").blur(function(){
        if($(this).val()){
            $(this).next().css({display:'none'});
        }else{
            $(this).next().html("账户不能为空");
            $(this).next().css(fail);
        }
    });
    $("#login_psw").blur(function(){
        if($(this).val()){
            $(this).next().css({display:'none'});
        }else{
            $(this).next().html("密码不能为空");
            $(this).next().css(fail);
        }
    });


    //如果存在cookie的话直接跳转到首页
    // if($.cookie('user')){
    //     window.location.href="../index.html";
    // }
    
})


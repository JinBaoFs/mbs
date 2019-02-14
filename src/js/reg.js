//注册页功能

$(function(){

    //查询用户名是否存在
    var success = {display : 'block',color:'#58bc58',"background-position":"1px -22px"};//成功状态信息样式
    var fail = {display : 'block',color:'#e50065',"background-position":"1px 3px"};//失败状态信息样式
    var sta1 = false,sta2=false,sta3=false,sta4=false; //状态
    $('#reg_call').blur(function(){
        if($(this).val()){
            if(RegObj.cha($(this).val())||RegObj.email($(this).val())||RegObj.tel($(this).val())){
                $.ajax({
                    type : 'get',
                    url : '../api/check_user.php',
                    data:{username:$(this).val().trim()},
                    success : function(data){
                        if(data*1){
                            $("#reg_call").next().css(success).html("验证成功");;
                            sta1 = true;
                        }else{
                            $("#reg_call").next().css(fail).html("账户已存在");;
                            sta1 = false;
                        }
                    }
                })
            }else{
                $(this).next().css(fail).html("账户必需中文或手机号或邮箱");
                sta1 = false;
            }
            
        }else{
            $(this).next().css(fail).html("账户不能为空");
            sta1 = false;
        }
        
    })

    //随机验证码
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

    //密码验证
    $('#reg_psw').blur(function(){
        if($(this).val()){
            if(RegObj.psw($(this).val())){
                $(this).next().html("验证通过").css(success);
                sta3 = true;
            }else{
                $(this).next().html("密码位数必需为6-20位").css(fail);
                sta3 = false;
            }
        }else{
            $(this).next().html("密码不能为空").css(fail);
            sta3 = false;
        }
    });
    //确认密码
    $('#reg_psw2').blur(function(){
        if($(this).val()){
            if($(this).val()==$('#reg_psw').val()){
                $(this).next().html("验证通过").css(success);
                $('#reg_psw').next().html("验证通过").css(success);
                sta4 = true;
            }else{
                $(this).next().html("两次输入密码不一致").css(fail);
                $('#reg_psw').next().html("两次输入密码不一致").css(fail);
                sta4 = false;
            }
        }else{
            $(this).next().html("确认密码不能为空").css(fail);
            sta4 = false;
        }
    })

    //注册提交
    $('#btn_reg').click(function(){
        if(sta1 && sta2 && sta3 && sta4){
            $.ajax({
                type : 'post',
                url : '../api/reg.php',
                data:{username:$('#reg_call').val().trim(),password:$('#reg_psw').val().trim()},
                success: function(data){
                    if(data*1){
                        alert("注册成功，现在可以去登录了");
                        window.location.href="login.html";
                    }else{
                        alert("注册失败")
                    }
                }
            })
        }else{
            alert('麻烦一下，先把资料完善哦！');
        }
    });

    //跳转到登录页
    $('.reg_btn_left').click(function(){
        window.location.href="login.html";
    })

    


})
"use strict";$(function(){var s={display:"block",color:"#58bc58","background-position":"1px -22px"},l={display:"block",color:"#e50065","background-position":"1px 3px"},e=!1,t=!1,i=!1,n=!1;$("#reg_call").blur(function(){$(this).val()?RegObj.cha($(this).val())||RegObj.email($(this).val())||RegObj.tel($(this).val())?$.ajax({type:"get",url:"../api/check_user.php",data:{username:$(this).val().trim()},success:function(t){e=1*t?($("#reg_call").next().css(s).html("验证成功"),!0):($("#reg_call").next().css(l).html("账户已存在"),!1)}}):($(this).next().css(l).html("账户必需中文或手机号或邮箱"),e=!1):($(this).next().css(l).html("账户不能为空"),e=!1)}),$(".yzm_con").html(randomNum(4)),$(".yzm_con").click(function(){$(this).html(randomNum(4))}),$(".yzm_slide").click(function(){$(this).prev().prev().html(randomNum(4))}),$("#yzm").blur(function(){t=$(this).val()?$(this).val()==$(this).next().text()?($(this).next().next().css(s).html("验证码正确"),!0):($(this).next().next().css(l).html("验证码不正确"),!1):($(this).next().next().css(l).html("验证码不能为空"),!1)}),$("#reg_psw").blur(function(){i=$(this).val()?RegObj.psw($(this).val())?($(this).next().html("验证通过").css(s),!0):($(this).next().html("密码位数必需为6-20位").css(l),!1):($(this).next().html("密码不能为空").css(l),!1)}),$("#reg_psw2").blur(function(){n=$(this).val()?$(this).val()==$("#reg_psw").val()?($(this).next().html("验证通过").css(s),$("#reg_psw").next().html("验证通过").css(s),!0):($(this).next().html("两次输入密码不一致").css(l),$("#reg_psw").next().html("两次输入密码不一致").css(l),!1):($(this).next().html("确认密码不能为空").css(l),!1)}),$("#btn_reg").click(function(){e&&t&&i&&n?$.ajax({type:"post",url:"../api/reg.php",data:{username:$("#reg_call").val().trim(),password:$("#reg_psw").val().trim()},success:function(t){1*t?(alert("注册成功，现在可以去登录了"),window.location.href="login.html"):alert("注册失败")}}):alert("麻烦一下，先把资料完善哦！")}),$(".reg_btn_left").click(function(){window.location.href="login.html"})});
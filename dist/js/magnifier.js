"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};!function(v){var u={magnifier:".magnifier",container:".magnifier-container",containerImg:".images-cover",view:".magnifier-view",width:500,height:500,moveView:".move-view",moveWidth:null,zoom:4,thumbnail:".magnifier-line > ul",assembly:".magnifier-btn",index:0};window.magnifier=function(i){if("object"==(void 0===i?"undefined":_typeof(i)))for(var e in i)u[e]=i[e];var o=this;o.magnifier=v(u.magnifier),o.container=o.magnifier.find(u.container),o.view=o.magnifier.find(u.view),o.moveView=o.magnifier.find(u.moveView),o.thumbnail=o.magnifier.find(u.thumbnail),o.assembly=o.magnifier.find(u.assembly),o.containerImg=o.magnifier.find(u.containerImg);var d,h,m,a,r,f,c,g,s,w=o.containerImg;o.magnifier.css({width:u.width}),o.container.css({width:u.width,height:u.height}),o.view.css({width:u.width,height:u.height}),d=u.moveWidth?u.moveWidth:u.width/u.zoom,h=d,o.moveView.css({width:d,height:h}),o.eqImg=function(){var n=new Image,t=o.thumbnail.find("img").eq(u.index).attr("src");n.src=t,containerWidth=u.width,containerHeight=u.height,o.thumbnail.find(">*").removeClass("active").eq(u.index).addClass("active"),function i(){var e;0==n.width&&(n.onload=i),e=n.width>n.height?(c=u.width,"top:50%;margin-top:"+-(g=n.height/(n.width/u.width))/2+"px"):(c=n.width/(n.height/u.width),g=u.width,"left:50%;margin-left:"+-c/2+"px"),w.empty().append('<img src="'+t+'" width="'+c+'" height="'+g+'" style="'+e+'" />'),s=u.width/d,o.view.empty().append('<img src="'+t+'" width="'+c*s+'" height="'+g*s+'" />'),m=(u.width-c)/2,a=u.width-m-d+1,r=(u.height-g)/2,f=u.height-r-h+1}()},o.eqImg(),o.moveFn=function(i){var e=i.clientX-o.magnifier.offset().left-d/2,n=i.clientY-o.magnifier.offset().top+v(document).scrollTop()-h/2;endX=m<e?e<a?e:a:m,endY=r<n?n<f?n:f:r,endY=0<endY?endY>u.width-h?u.height-h:endY:0,o.moveView.css({left:endX,top:endY,display:"block"}),positionX=(endX-(u.width-c)/2)*s,positionY=(endY-(u.height-g)/2)*s,o.view.css({display:"block"}).find("img").css({"margin-left":-positionX,"margin-top":-positionY})},o.container.on("mousemove",function(i){o.moveFn(i)}).on("mouseleave",function(){o.moveView.hide(),o.view.hide()});var t=o.thumbnail.find(">*"),l=t.length;return o.imgMove=function(i){i?u.index++:u.index--;var e=Math.ceil(u.width/t.width()/2);if(l<e)return!1;u.index<0?u.index=0:u.index>l-e?u.index=l-e:u.index;var n=t.width()*u.index-t.width();o.thumbnail.css({left:(0<n?-n:0)+"px"})},o.assembly.find(">*").on("click",function(){o.imgMove(v(this).index())}),t.on("click",function(){u.index=v(this).index(),o.eqImg(),o.imgMove(u.index)}),o.setIndex=function(i){u.index=i||0},o}}(jQuery);
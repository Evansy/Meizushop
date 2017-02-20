/**
 * Created by Administrator on 2016/6/13.
 */
$(function () {
    $(".lubo").lubo({});
    /*小商品轮播事件*/
    var aniLeft = parseInt($(".mz-max-box").css("left")),
        timer = null;
    function Ani(add,direction,mleft,_this,id) {
        if(eval(aniLeft+add+mleft)){
            aniLeft = aniLeft-(direction);
            $(".mz-max-box").animate({
                "left":aniLeft+"px"
            },1200);
            $("#"+id).removeClass("mz-anibtn-diable");
        }
        if(aniLeft===mleft){
            $(_this).addClass("mz-anibtn-diable");
        }
    }

    function aniAuto() {
        var lock = 1;
            timer = setInterval(function () {
            var aniLeft = parseInt($(".mz-max-box").css("left"));
                console.log(aniLeft);
            if(lock){
                $("#mzAniLeft").click();
                if (aniLeft===0) {
                    lock = 0;
                }
            }else {
                $("#mzAniRight").click();
                if (aniLeft===-2490) {
                    lock = 1;
                }
            }
        },2000);
    }
    $("#mzAniLeft").on('click',function l() {
        var _this=this,
            id = $("#mzAniRight").attr('id');
        Ani("<",-1245,0,_this,id);
    });
    $("#mzAniRight").on('click',function r() {
        var _this=this,
            id = $("#mzAniLeft").attr('id');
        Ani(">",1245,-2490,_this,id);
    });
    aniAuto();
    $("#mzAniLeft").on('mouseover',function(){clearInterval(timer)});
    $("#mzAniLeft").on('mouseout',function(){aniAuto()});
    $("#mzAniRight").on('mouseover',function(){clearInterval(timer)});
    $("#mzAniRight").on('mouseout',function(){aniAuto()});
    $("#mzPanelEve").on('mouseover',function(){clearInterval(timer)});
    $("#mzPanelEve").on('mouseout',function(){aniAuto()});

    /*munu-product-list*/
    $('#menu-Ani-hover').on('mouseover',function (event) {
        var e = event || window.event,
            target = e.target || e.srcElement,
            liIndex = $(target).parent().index();
            e.preventDefault();
        $.ajax({
            url:'data/menu-product-list.php',
            data:{idx:liIndex},
            dataType:'json',
            success:function (data) {
                var str = '';
                $(data).each(function (k,v) {
                    str+="<li class='menu-product-item'>"
                    str+="<a href=''>"
                    str+="<div class='menu-product-figure'>"
                    str+="<img src=\'images/"+v.img_src+"\'>"
                    str+="</div>"
                    str+="<p class='menu-product-name'>"+v.title+"</p>"
                    str+="<p class='menu-product-price'>"
                    str+="<span class='originPrice'>"+(v.origin_price?'&yen;'+v.origin_price:'')+"</span>"
                    str+="<span>&yen;"+v.price+"</span>"
                    str+="</p></a></li>"
                });
                $('.menu-product-list').html(str);
            }
         });
        $('.menu-product-list').stop(!0,!1).slideDown(200);
    });
    $('.nav-menu').on('mouseenter',function () {
        $('.menu-product-list').stop(!0,!1).slideDown(200);
    })
    $('.nav-menu').on('mouseleave',function () {
        $('.menu-product-list').stop(!0,!1).slideUp(200);
    })
    $('#menu-Ani-hover').on('mouseout',function (event) {
        var e = event || window.event;
        e.preventDefault();
        $('.menu-product-list').stop(!0,!1).slideUp(200);
    });

    /***************返回顶部***************/
    $(".gotop-top").click(function(event) {
        var e = event || window,event;
        e.preventDefault(),
            $("body, html").animate({
                scrollTop: 0
            }, 800)
    });
    $(window).scroll(function() {
        var distance = document.documentElement.scrollTop || document.body.scrollTop;
        distance > 100 ? $(".site-gotop").fadeIn() : $(".site-gotop").fadeOut()
    });
})
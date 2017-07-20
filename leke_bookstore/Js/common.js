/**
 * Created by GreedyJay on 2017/4/18.
 */
/*下拉滑动*/
$(function () {
    $(".personal_set").hide();
    $(".loginname,.shezhi").on("click", function(e){
        if($(".personal_set").is(":hidden")){
            $(".personal_set").slideDown();
        }else{
            $(".personal_set").slideUp();
        }
        $(document).one("click", function(){
            $(".personal_set").slideUp();
        });
        e.stopPropagation();
    });
    $(".personal_set").on("click", function(e){
        e.stopPropagation();
    });
});

/*左侧导航变色*/
$(function () {
    $(".left_nav>div").click(function () {
        $(".left_nav>div").each(function () {
            $(this).removeClass("pressed");
        });
        $(this).addClass("pressed");
    });
});

/*支付订单变色*/
$(function () {
    $(".paybtn").click(function () {
        $(".paybtn").each(function () {
            $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });
});

/*消息通信消息列表切换切换*/
$(function () {
    $(".friendlist>div").click(function () {
        $(".friendlist>div").each(function () {
            $(this).removeClass("addcolor");
        });
        $(this).addClass("addcolor");
    });
});

/*有关账号安全的设置*/
$(function () {
    $("#phone-block,#email-block,#pwd-block").hide();
    $("#reset_phone").click(function(){
        $("#phone-block").slideToggle("slow",function () {
            if($("#phone-block").css('display')=='block'){
                $("#reset_phone").css('background-color','#ccc');
                $("#reset_phone").html('取 消').blur();
            }else {
                $("#reset_phone").css('background-color','#3498db');
                $("#reset_phone").html('修 改').blur();
            }
        });
    });
    $("#reset_email").click(function(){
        $("#email-block").slideToggle("slow",function () {
            if($("#email-block").css('display')=='block'){
                $("#reset_email").css('background-color','#ccc');
                $("#reset_email").html('取 消').blur();
            }else {
                $("#reset_email").css('background-color','#3498db');
                $("#reset_email").html('修 改').blur();
            }
        });
    });
    $("#reset_pwd").click(function(){
        $("#pwd-block").slideToggle("slow",function () {
            if($("#pwd-block").css('display')=='block'){
                $("#reset_pwd").css('background-color','#ccc');
                $("#reset_pwd").html('取 消').blur();
            }else {
                $("#reset_pwd").css('background-color','#3498db');
                $("#reset_pwd").html('修 改').blur();
            }
        });
    });
})
$(function(){
    $('.tabdiv div').on('click',function(){
        $('.tabdiv div').removeClass('active');
        $(this).addClass('active');
        $('.set-tab').removeClass('active'); 
        $('.set-tab').eq($(this).index()).addClass('active');
    })
    $("#changephone").click(function () {
        $("#tt").click();
        $("#phone-block").slideDown("slow");
        $("#reset_phone").css('background-color','#ccc');
        $("#reset_phone").html('取 消').blur();
    });
    $("#changeemail").click(function () {
        $("#tt").click();
        $("#email-block").slideDown("slow");
        $("#reset_email").css('background-color','#ccc');
        $("#reset_email").html('取 消').blur();
    });
})


/*设置安全账号设置方面的信息显示状态*/
$(function () {
    $(".editname-input,.wrapsex,.dateselect,.region,.regiondetail,.btn-set").hide();
    $("#editinfo").click(function () {
        $(".name-val,.sex-val,.data-val,.region-val").hide();
        $(".editname-input,.wrapsex,.dateselect,.region,.regiondetail,.btn-set").fadeIn()
        $(this).fadeOut();
    });
    $(".quitset-btn").click(function () {
        $(".name-val,.sex-val,.data-val,.region-val").show();
        $(".editname-input,.wrapsex,.dateselect,.region,.regiondetail").hide();
        $(".save-edit-btn").fadeOut();
        $(this).fadeOut();
        $("#editinfo").fadeIn();
    })
});

$(function () {
    
    $(".cheche").bind('click',function () {
        $(".gouwuche").animate({
            right:'0px',
        },function () {
            $(".fanhui").fadeIn();
            $(".shadow").fadeIn();
        })
    });
    $(".fanhui,.shadow").bind('click',function () {
        $(".shadow").fadeOut('fast');
        $(".gouwuche").animate({
            right:'-=400px',
        },'slow',function () {
            $(".fanhui").fadeOut();
        })
    });
});

/*全选反选*/
$(function () {
    $("#checkall").click(function () {
        if($(this).prop('checked')){
            $(".car-content input").prop('checked',true);
        }else{
            $(".car-content input").prop('checked',false);
        }
    });
    $(".car-content input").click(function () {
        if ( $(".car-content input:checked").length==$(".car-content input").length){
            $("#checkall").prop('checked',true);
        }else {
            $("#checkall").prop('checked',false);
        }
    });
})
/*$(function () {
    $("#checkall").click(function () {
        $('[name=checkbuy]:checkbox').attr("checked",this.checked);
    });
    $('[name=checkbuy]:checkbox').click(function () {
        var flag=true;
        $('[name=checkbuy]:checkbox').each(function () {
            if(!this.checked){
                flag=false;
            }
        })
        $("#checkall").attr('checked',flag);
    })
});*/
/*结算事件*/
function calculate() {
    var sum=0;
    $(".car-content input:checked").each(function () {

        sum+=parseFloat($(this).next().next().find('span').html());
    })
    $(".sumfee").html(sum);
}
$(function () {
    $("#checkall,.car-content input").click(function () {
        calculate();
    })
});
/*购物车全部清空？*/
$(function () {
    $("#removeall").click(function () {
        if(confirm("确定要清空购物车所有商品么？")){
            $(".car-content").html('');
            calculate();
        }else {
            return false;
        }
    })
});


/*购物车中清除单行商品*/
$(function (){
    $("img.deletepay").click(function () {
        if(confirm("确定要把这本书移除购物车么？")){
            $(this).parent().parent().remove();
            calculate();
        }else {
            return false;
        }
    })
});
function cmbAddOption(cmb, str, str1,obj)
{
    var option = document.createElement("OPTION");
    cmb.options.add(option);
    option.innerHTML = str;  //所显示的选项
    option.value = str1;    //选项传递的值
    option.obj = obj;    //设置json对象为选项的obj属性
}





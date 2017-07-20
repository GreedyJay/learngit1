/**
 * Created by GreedyJay on 2017/4/19.
 */
$(function(){
    //计算总金额
    function totalMoney(){
        var total_price = 0;
        var total_count = 0;
        $(".d1-input").each(function(){
            if($(this).hasClass('status')) {
                var obj1 = $(this).parent().siblings(".d4").find(".count").val();//获取一行的商品数量
                total_count += parseInt(obj1);
                var obj2= $(this).parent().siblings(".d5").find(".cart-price").text();//获取一行的金额
                total_price += parseInt(obj2);
            }
        });
        $(".item").text(total_count);//将计算出的总金额显示
        $(".total").text(total_price);//将计算出的总数量显示
    }
    //全选
    $(".d-input").toggle( function(){
            $(this).addClass("status");
            $(".sc-mid-list .d1-input").addClass("status");//添加勾选样式
            $(".sc-mid-list").addClass("mouseover");
            totalMoney();
        },
        function(){
            $(this).removeClass("status");
            $(".sc-mid-list .d1-input").removeClass("status");//取消勾选样式
            $(".sc-mid-list").removeClass("mouseover");
            totalMoney();
        });
    // 单选
    $(".d1-input").toggle( function(){
            $(this).addClass("status");//添加勾选样式
            $(this).parents(".sc-mid-list").addClass("mouseover");
            totalMoney();
        },
        function(){
            $(this).removeClass("status");//取消勾选样式
            $(this).parents(".sc-mid-list").removeClass("mouseover");
            totalMoney();
        });
    // 减号样式
    function count(){
        $(".count").each(function(){
            var num = $(this).val();
            if (num == 1) {
                $(this).siblings(".reduce").removeClass("two").addClass("one");
                $(this).siblings(".reduce").attr("disabled","disabled");
            } else {
                $(this).siblings(".reduce").removeClass("one").addClass("two");
            }
        })//根据数量是否为1，改变减号的样式
    }
    // 加
    $(".sc-mid-list .add").click(function(){
        var input = $(this).siblings(".count");
        var obj = $(this).parents(".d4");
        var per = parseFloat(obj.siblings(".d3").find(".per").text());//获取当前一行的单价
        var num = '';
        var price = '';
        input.attr("value", parseInt(input.attr("value")) + 1 );//数量加1
        num = input.attr("value");
        price = num*per;//
        obj.siblings(".d5").find(".cart-price").text(price);
        count();
        totalMoney();
    })
    // 减
    $(".sc-mid-list .reduce").click(function(){
        var input = $(this).siblings(".count");
        var obj = $(this).parents(".d4");
        var per = parseFloat(obj.siblings(".d3").find(".per").text());//获取当前一行的单价
        var num = '';
        var price = '';
        var Val = parseInt(input.attr("value"));
        if(Val <= 1){
            Val = 2;
        }
        input.attr("value", parseInt(Val) - 1 );//数量减1
        num = input.attr("value");
        price = num*per;//
        obj.siblings(".d5").find(".cart-price").text(price);
        count();
    })
})
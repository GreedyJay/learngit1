/**
 * Created by GreedyJay on 2017/5/5.
 */
$(function() {
    var offset = $("#end").offset();
    $(".addcar").click(function(event){
        var addcar = $(this);
        var img = addcar.parent().find('img').attr('src');
        var flyer = $('<img class="u-flyer" src="'+img+'">');
        flyer.fly({
            start: {
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                top: event.pageY //开始位置（必填）
            },
            end: {
                left: offset.left+10, //结束位置（必填）
                top: offset.top+10, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度

            },
            onEnd: function(){ //结束回调
                $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息
                addcar.css("cursor","default") .removeClass('orange').unbind('click');
                this.destory(); //移除dom
            },
            aee:function () {
                
            }
        });
    });
});
/*复选框全选或全不选效果*/
function selectAll(){
    var oInput=document.getElementsByName("cartCheckBox");
    for (var i=0;i<oInput.length;i++){
        oInput[i].checked=document.getElementById("allCheckBox").checked;
    }
};


/*根据单个复选框的选择情况确定全选复选框是否被选中*/
function selectSingle(){
    var k=0;
    var oInput=document.getElementsByName("cartCheckBox");
    for (var i=0;i<oInput.length;i++){
        if(oInput[i].checked==false){
            k=1;
            break;
        }
    }
    if(k==0){
        document.getElementById("allCheckBox").checked=true;
    }
    else{
        document.getElementById("allCheckBox").checked=false;
    }
};
var data = { a: 1 }

var vm = new Vue({
    data: data
})
vm.a // -> 1
vm.$data === data // -> true
// Vue.extend() 中 data 必须是函数
var Component = Vue.extend({
    data: function () {
        return { a: 1 }
    }
});

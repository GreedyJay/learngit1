/**
 * Created by GreedyJay on 2017/5/11.
 */
function zjmodel() {
    var oBtn=document.getElementById("btnidname");
        oBtn.onclick=function () {

        }
    //页面尺寸
    var sWidth=document.documentElement.scrollWidth;
    var sHeight=document.documentElement.scrollHeight;

    var wWidth=document.documentElement.clientWidth;
    var wHeight=document.documentElement.clientHeight;


    //可视区域尺寸
    var oMask=document.createElement("div");
        oMask.id="mask";
        oMask.style.height=sHeight+"px";
        oMask.style.width=sWidth+"px";
        document.body.appendChild(oMask);

    var oLogin=document.createElement("div");
        oLogin.id="login";
        oLogin.innerHTML="<div class='loginCon'><div id='close'></div></div>";
        document.body.appendChild(oLogin);

    var dHeight=oLogin.offsetHeight;
    var dWidth=oLogin.offsetWidth;
        oLogin.style.left=(sWidth-dWidth)/2+"px";
        oLogin.style.top=(wHeight-dHeight)/2+"px";

    var oClose=document.getElementById("close");
        oMask.onclick=oClose.onclick=function () {
            document.body.removeChild(oMask);
            document.body.removeChild(oLogin);
        }
}
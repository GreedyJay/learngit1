/**
 * Created by GreedyJay on 2017/4/7.
 */
function instance (L,R) {
    var O=R.prototype;
    L=L.__proto__;
    while (1){
        if(null===O)
            return false;
        if(O===R)
            return true;
        L=L.__proto__;
    }
}
function inherit(o) {
    var obj=new Object();
    if(o instanceof Object.prototype){
        var xixi=25;
        obj.__proto__=o;
    }
    return obj;
}
function inherit() {
    var vvliebe=function () {

    }
}
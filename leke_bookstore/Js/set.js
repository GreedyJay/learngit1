/**
 * Created by GreedyJay on 2017/5/4.
 */
$(function () {
    $("#submit-phonenum").click(function () {
        $("#phone-block").slideUp('slow');
        $("#reset_phone").css('background-color','#3498db');
        $("#reset_phone").html('修 改').blur();
    });
    $("#submit-email").click(function () {
        $("#email-block").slideUp('slow');
        $("#reset_email").css('background-color','#3498db');
        $("#reset_email").html('修 改').blur();
    });
    $("#submit-pwd").click(function () {
        $("#pwd-block").slideUp('slow');
        $("#reset_pwd").css('background-color','#3498db');
        $("#reset_pwd").html('修 改').blur();
    });
})

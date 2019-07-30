$(function() {
    $(addBut).on("click",function () {
        messageValue = $(msg).val() ;
        $(msgList).append("<option>" + messageValue + "</option>");
    });
})
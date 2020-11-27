$(document).ready(function () {
    $(".para").mouseover(function () {
        $(this).stop().animate({
            width: "400px"
        });
    });
    $(".para").mouseout(function(){
        $(this).stop().animate({width: "300px"});
    });
});

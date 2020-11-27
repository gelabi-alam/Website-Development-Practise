/* slideToggle & stop() Start*/
$(document).ready(function () {
    $("#slide").click(function () {
        $("#one").slideToggle(3000);
    });
    $("#stop").click(function () {
        $("#one").stop();
    });
});
/* slideToggle & stop() End*/

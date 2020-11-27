/*Just Check for jQuery work*/
//alert(33);

/* slideUp & slideDown Start*/

$(document).ready(function () {
    $("#slideup").click(function () {
        $("#fourth").slideUp(1000);
    });
    $("#slidedown").click(function () {
        $("#fourth").slideDown(1000);
    });
});

/* slideUp & slideDown End*/

/* slideToggle Start*/
$(document).ready(function () {
    $("#slidetoggle").click(function () {
        $("#fifth").slideToggle(1000);
    });
});
/* slideToggle End*/

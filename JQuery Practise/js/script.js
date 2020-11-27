/*Show & Hide Start
1. Use click() Event function.
2. Use dblclick() Event function.
3. Use mouseover() Event function.
4. Use mouseout() Event function.
*/
jQuery(document).ready(function () {
    jQuery("#hide").click(function () {
        jQuery("#first").hide(1000);
    });
    jQuery("#show").click(function () {
        jQuery("#first").show(1000);
    });
});
/*Show & Hide End*/

/*Toggle Start*/
$(document).ready(function () {
    $("#toggle").click(function () {
        $("#second").toggle(1000);
    });
});
/*Toggle End*/

/*Fadein and FadeOut Start*/
jQuery(document).ready(function () {
    jQuery("#fadein").click(function () {
        jQuery("#third").fadeIn(1000);
    });
    jQuery("#fadeout").click(function () {
        jQuery("#third").fadeOut(1000);
    });
});
/*Fadein and FadeOut End*/

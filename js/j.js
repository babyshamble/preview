$(document).ready(function(){
    var e = $(".move1").children(".planpicnum").find("li");
    var pickterval;
    var i = 0;
    $(".move1").children(".move1").find("li").hover(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
        var index = $(".move1").children(".planpicnum").find("li").index(this);
        $(".move1").children(".planpicshow").find("a").eq(index).show() .siblings().hide();
        clearInterval(pickterval);
    });
    pickterval=setInterval(function () {
        var s = parseInt(e.length)-1;
        $(".move1").children(".planpicshow").find("a").eq(i).show().siblings().hide();
        $(".move1").children(".planpicnum").find("li").eq(i).addClass("hover").siblings(). removeClass("hover");
        i >s ? i = 0 : i++;
    }, 2000) });
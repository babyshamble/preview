/**
 * Created by yang on 2015/10/23.
 */
function show(id)
{
    var id="fp-tooltip_"+id;
    $("."+id).show();
}
function hide(id){
    var id="fp-tooltip_"+id;
    $("."+id).hide();
}
function leavePage(){
    try{
        var nodebg = document.getElementById("yx_bgsound_bg");
        if(nodebg) nodebg.parentNode.removeChild(nodebg);
    }catch(e){}

    RemoveSound();
}


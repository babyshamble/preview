/**
 * Created by yang on 2015/10/24.
 */
function PlaySound(name)
{
    RemoveSound();
    var timestr = new Date().getTime();
    var bgsoundHtml='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="1" height="1" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="flashVars" value="file='+name+'.mp3" /><param name="movie" value="swf/bgsound.swf"/><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed flashvars="file='+name+'.mp3?isContinue=1&isAutoPlay=1" src="swf/bgsound.swf" quality="high" bgcolor="#ffffff" width="1" height="1" name="bgsound" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
    var bgsoundObj = document.createElement("div");
    bgsoundObj.setAttribute('id', 'yx_bgsound_div');
    bgsoundObj.innerHTML=bgsoundHtml;
    document.body.appendChild(bgsoundObj);
}
function RemoveSound()
{
    try{
        var nodebg = document.getElementById("yx_bgsound_div");
        if(nodebg) nodebg.parentNode.removeChild(nodebg);
    }catch(e){}
}

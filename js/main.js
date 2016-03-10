/*fullpage使用可参考 http://www.uedsc.com/fullpage.html*/
$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: [],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7'],
		menu: '#menu',
		easing: 'easeInOutCirc',
        loopTop:'true',
        loopBottom:'true',

		// 页面结构生成后
		afterRender: function(){
            /*播放声音，每次关闭前先删除*/          
            function PlaySound(name)
            {
                RemoveSound();
                var timestr = new Date().getTime();
                var bgsoundHtml='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="1" height="1" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="flashVars" value="file='+name+'.mp3" /><param name="movie" value="swf/bgsound.swf"/><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed flashvars="file='+name+'.mp3?isContinue=1&isAutoPlay=1" src="swf/bgsound.swf" quality="high" bgcolor="#ffffff" width="1" height="1" name="bgsound" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
                var bgsoundObj = document.createElement("div");
                bgsoundObj.setAttribute('id', 'yx_bgsound_div');
                bgsoundObj.innerHTML=bgsoundHtml;
                document.body.appendChild(bgsoundObj);
            };
            
            /*关闭声音*/
            function RemoveSound()
            {
                try{
                    var nodebg = document.getElementById("yx_bgsound_div");
                    if(nodebg) nodebg.parentNode.removeChild(nodebg);
                }catch(e){}
            };
		},

		// 滚动到某一屏后
		afterLoad: function(anchorLink, index){ 			
			if(index == 1){
                PlaySound('swf/one');
				$('#section-1-cover').fadeIn(500);
			}
		
            if(index == 2) {
                PlaySound('swf/two');
                $('#section-3-cover').fadeIn(500);
            }
		
            if(index == 3) {
                PlaySound('swf/three');
                $('#section-4-cover').fadeIn(500);
            }
      
            if(index == 4) {
                PlaySound('swf/four');
                $('#section-5-cover').fadeIn(500); 
            }
    
            if(index == 5) {
                PlaySound('swf/five');
                $('#section-7-cover').fadeIn(500); 
            }

            if(index == 6) {
                PlaySound('swf/six');
                $('#section-8-cover').fadeIn(500); 
            }

			if(index == 7) {
                PlaySound('swf/seven');
                $('#section-2-cover').fadeIn(500);
			}

            if(index == 8){
                PlaySound('swf/eight');
                $('#section-6-cover').fadeIn(500);
            }
		},

		// 离开某一屏前
		onLeave: function(index, direction){		
			if(index == 1) {    
                RemoveSound(); /*调用方法*/
				$('#section-1-cover').hide();
			}

			if(index == 2) {   
                RemoveSound();
				$('#section-3-cover').hide();
			}

			if(index == 3) {
                RemoveSound();
				$('#section-4-cover').hide();
			}
	
            if(index == 4) {
                RemoveSound();
                $('#section-5-cover').hide();
            }

			if(index == 5) {
                RemoveSound();
                $('#section-7-cover').hide();
			}

            if(index == 6) {
                RemoveSound();
                $('#section-8-cover').hide();
            }

			if(index == 7) {
                RemoveSound();
                $('#section-2-cover').hide();
			}

            if(index == 8) {
                RemoveSound();
                $('#section-6-cover').hide();
            }
		}

	});
});

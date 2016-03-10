var data3={   
    
    "text1": "第一时间目睹事件发生、第一时间关注新闻进展，凤凰直播间连线全球，信息再无二手，所见即所得。", 
    "text2": "马航MH370事件让国内媒体经受了一次前所未有的考验。在此次事件中，做出最准确预测和最全面分析的，不是稿源媒体的记者，而是凤凰新闻客户端的评论员——唐驳虎。", 
    "text3": "唐驳虎、刘三解、王路、龙舟，四大主笔扛起凤凰新闻客户端原创大旗；Fun来了、凤凰知道、今日最大声⋯⋯汇集凤凰独家观点",
    "text4": "直男癌测试、贪官们的奇葩事儿⋯⋯独家策划+崭新新闻呈现形式+凤凰式犀利视角，揭示事件全貌，开启用户关注，凤凰新闻很爱演", 
    "text5": "第一时间目睹事件发生、第一时间关注新闻进展，凤凰直播间连线全球，信息再无二手，所见即所得",
}

function changeContent(mfcont,textcontiam,iam,addclass){
    var mf = parseInt($(mfcont).css('marginLeft'));
    if(iam == 'left-hand'){ 
        if(mf !== 0){
            mf = (mf + 250) + 'px';
        } 
    }else if(iam == 'right-hand'){
        if(mf > -750){
            mf = (mf - 250) + 'px';
        }else{
            mf = '0px';
        }   
    }
    $(mfcont).animate({marginLeft:mf},500);

    var text;
    if(mf == '0px'){
        text = data3.text1;      
    }else if(mf == '-250px'){
        text = data3.text2;
    }else if(mf == '-500px'){
        text = data3.text3;
    }else if(mf == '-750px'){
        text = data3.text4;
    }else if(mf == '-900px'){
        text = data3.text5;
    }else{
        text = data3.text1;      
    }

    var div = "<div class="+addclass+">"+text+"</div>";
    $(textcontiam).html(div);
    $(textcontiam).fadeIn(3000);
}
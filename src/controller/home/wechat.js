// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------
const DEFULT_AUTO_REPLY = '功能正在开发中~';
module.exports = class extends think.Controller {
    indexAction(){
        const echostr = this.get('echostr');
        return this.body=echostr;
    }
   //关键词消息回复
    async textAction(){
        //console.log(this.http);
        let message = this.post();
        // console.log(message);
        let key = message.Content.trim();
        let kmodel = this.model('wx_keywords');
        let isKey = await kmodel.field('rule_id').where({keyword_name: key}).find();
        if(!think.isEmpty(isKey)){
            //是关键字
            let rulemodel = this.model('wx_keywords_rule');
            let replyliststr = await rulemodel.where({id: isKey.rule_id}).getField('reply_id', true);
            let replylisttmp = replyliststr.split(',');
            let replylist = [];
            for(let i in replylisttmp){
                if(replylisttmp[i] != ''){
                    replylist.push(replylisttmp[i]);
                }
            }
            if(!think.isEmpty(replylist)){
                let  randomi = parseInt(Math.random()*replylist.length);
                let replymodel = this.model('wx_replylist');
                let data = await replymodel.where({id: replylist[randomi]}).getField('content', true);
                return this.success(data);
            }
        }
        //普通消息回复
        let replymodel = this.model('wx_replylist');
        let datas = await replymodel.where({reply_type: 2}).order("create_time DESC").select();
        let data = datas[0];
        let content;
        switch (data.type){
            case "text":
                content = data.content;
                break;
            case "news":
                content = JSON.parse(data.content);
                break;
        }
       return this.success(content);

    }

    //事件关注
    async eventAction(){
        let message = this.post();
        switch (message.Event){

            case "subscribe":  //首次关注
                let datas = await this.model("wx_replylist").where({reply_type:1}).order("create_time DESC").select();
                let data = datas[0];
                let content;
                switch (data.type){
                    case "text":
                        content = data.content;
                        break;
                    case "news":
                        content = JSON.parse(data.content);
                        break;
                }
                this.success(content);
                break;
            case "unsubscribe"://取消关注
                //todo
                break;
            case "CLICK"://click事件坚挺
                let res = await this.model("wx_material").find(message.EventKey);
                let news_item = JSON.parse(res.material_wx_content);
                let list = news_item.news_item;
                for(let v of list){
                    v.picurl = v.thumb_url;
                }
                this.success(list);
                //todo
                break;
            case "SCAN"://扫码事件监听
                //todo
                console.log(message);
                break;
            default:
                console.log(message);
                break;
        }
        // this.reply(JSON.stringify(message));
    }
    __call(){
       return this.success(DEFULT_AUTO_REPLY);
    }
}
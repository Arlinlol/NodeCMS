var wechatMiddleware = require('think-wechat');

think.middleware('parse_wechat', wechatMiddleware({
    wechat: {
        token: '΢�Ź��ں�token',
        appid: '΢�Ź��ں�ID',
        encodingAESKey: '��Ϣ��ȫ���ܴ�'
    }
}));
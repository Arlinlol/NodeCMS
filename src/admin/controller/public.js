/**
 * Created by arter on 2015/10/29.
 */
'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * public action
     * @return {Promise} []
     */
    async signinAction(){
        //��̨��½���
        if(this.isPost()){
          let res = await this.model("member").signin("admin","123456");
           console.log(res);
        }else{
        return this.display();
        }
    }

    logoutAction(){
        //�˳���¼
        console.log(2);
    }

    verifyAction(){
        //��֤��
    }
}
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
    signinAction(){
        //��̨��½���
        return this.display();
    }

    logoutAction(){
        //�˳���¼
        console.log(2);
    }

    verifyAction(){
        //��֤��
    }
}
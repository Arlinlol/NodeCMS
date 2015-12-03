/**
 * Created by arter on 2015/11/16.
 */
'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    init(http){
        super.init(http);
        this.tactive = "setup"
    }

    indexAction(){
        //auto render template file index_index.html
        this.assign({
            "active":"/admin/channel/index",
        })
        return this.display();
    }
    aabbAction(){
        console.log(1)
    }
}

'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    
    return this.display();
  }
  //订单列表
  async listAction(){
        let map={};
        map.is_del = 0
        let data = await this.model("order").where(map).page(this.get('page')).countSelect();
        let Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter
        let pages = new Pages(); //实例化 Adapter
        let page = pages.pages(data);
        this.assign('pagerData', page); //分页展示使用
        console.log(data.data);
        this.assign('list', data.data);
        this.meta_title = "订单管理";
        return this.display();
  }
}
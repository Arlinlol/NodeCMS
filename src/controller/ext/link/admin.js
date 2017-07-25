// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015-2115 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------
const Admin = require('../admin');
module.exports = class extends Admin {
  /**
   * index action
   * 插件管理入口
   * 友情链接管理列表
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let typeid = this.get("typeid")||0;
    this.assign("typeid",typeid);
    let map = {}
      if(typeid>0){
          map.typeid =typeid
      }
    //获取友情链接
    let data = await this.model("ext_link").where(map).page(this.get('page')).countSelect();
    //console.log(data);
      let Page = this.service('pagination');
      let page = new Page();
      let html = page.page(data,this.ctx,{
          desc: true, //show description
          pageNum: 2,
          url: '', //page url, when not set, it will auto generated
          class: 'nomargin', //pagenation extra class
          text: {
              next: '下一页',
              prev: '上一页',
              total: '总数: ${count} , 页数: ${pages}'
          }
      });
    this.assign('pagerData', html); //分页展示使用
    this.assign('list', data.data);
    //获取当前插件的分类
    this.assign("type",await this.gettype());
    return this.display();
  }

  /**
   * 添加友情链接
   * @returns {*}
   */
 async ajaxaddAction(){
    if(this.isPost){
      let data = this.post();
      if(data.linktype==1){
        if(think.isEmpty(data.logo)){
          return this.fail("logo链接类型，请填写logo地址！")
        }
      }
      let res = await this.model("ext_link").add(data);
      if(res){
        return this.success({name:"添加成功!"})
      }else {
        return this.fail("添加失败！")
      }
    }else {
      //获取当前插件的分类
      this.assign("type",await this.gettype());
      this.meta_title="添加友情链接";
      return this.display();
    }

  }

    /**
     * 修改友情链接
     */
    async ajaxeditAction(){
        if(this.isPost){
            let data = this.post();
            if(data.linktype==1){
                if(think.isEmpty(data.logo)){
                    return this.fail("logo链接类型，请填写logo地址！")
                }
            }
            let res = await this.model("ext_link").where({id:data.id}).update(data);
            if(res){
                return this.success({name:"修改成功!"})
            }else {
                return this.fail("修改失败！")
            }
        }else {
            let id = this.get("id");
            let link = await this.model("ext_link").find(id);
            console.log(link);
            this.assign("link",link);
            //获取当前插件的分类
            this.assign("type",await this.gettype());
            this.meta_title="添加友情链接";
            return this.display();
        }

    }
    async delAction(){
        let ids = this.para("ids");
        //console.log(ids);
        let res = await this.model("ext_link").where({id:["IN",ids]}).delete()
        if(res){
            return this.success({name:"删除成功!"})
        }else {
            return this.fail("删除失败！")
        }
    }

  /**
   *  友情链接审核申请
   * @returns {*}
   */
  async applyAction(){
      if(this.isPost){
          let ids = this.post("ids");
          let res = await this.model("ext_link").where({id:["IN",ids]}).update({passed:1});
          if(res){
              return this.success({name:"审核成功!"})
          }else {
              return this.fail("审核失败！")
          }
      }else {
          //获取友情链接
          let data = await this.model("ext_link").where({passed:0}).page(this.get('page')).countSelect();
          //console.log(data);
          let Page = this.service('pagination');
          let page = new Page();
          let html = page.page(data,this.ctx,{
              desc: true, //show description
              pageNum: 2,
              url: '', //page url, when not set, it will auto generated
              class: 'nomargin', //pagenation extra class
              text: {
                  next: '下一页',
                  prev: '上一页',
                  total: '总数: ${count} , 页数: ${pages}'
              }
          });
          this.assign('pagerData', html); //分页展示使用
          this.assign('list', data.data);
          return this.display();
      }

  }

}
// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------
'use strict';
import Base from './base.js';
import url from 'url';
/**
 * 模型管理控制器
 * @author arterli <arterli@qq.com>
 */
export default class extends Base {
    init(http) {
        super.init(http);
        this.db = this.model('model');
        this.tactive = "setup"
    }


    async indexAction() {
        let map = {'status': ['>', -1]}
        let data = await this.db.where(map).page(this.get('page')).countSelect();
        let Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter
        let pages = new Pages(); //实例化 Adapter
        let page = pages.pages(data);
        this.assign('pagerData', page); //分页展示使用
        this.assign('list', data.data);
        this.meta_title = "模型管理";
        return this.display()
    }

    /**
     * 新建模型
     * @returns {*}
     */
    async addAction(){
       if(this.isPost()){
          let data = this.post();
           console.log(data);
           data.create_time = new Date().valueOf();
           data.update_time = new Date().valueOf();
           data.status = 1
           let res = await this.db.add(data);
           if(res){
               return this.success({name:"添加成功",url:"/admin/model/index"});
           }
       }else {
       this.active="admin/model/index"
       this.meta_title = "添加模型"
       return this.display()
       }
    }

    /**
     * 编辑模型
     *
     */
    async editAction(){
        let id = this.get("id");
        if(think.isEmpty(id)){
            this.fail('参数不能为空！');
        }
        let data = await this.db.find(id);
       // console.log(data);
        data.attribute_list = think.isEmpty(data.attribute_list) ? '':data.attribute_list.split(",");
       // console.log(data.attribute_list);
        let fields = await this.model('attribute').where({model_id:data.id}).field('id,name,title,is_show').select();
        //是否继承了其他模型
        if(data.extend != 0){
            var extend_fields = await this.model('attribute').where({model_id:data.extend}).field('id,name,title,is_show').select();
            var allfields = extend_fields.concat(fields);

        }
        //改造数组
        var obj={}
        if(allfields){
        for(let v of allfields ){
            obj[v.id]=v;
        }
        }else {
            for(let v of fields ){
                obj[v.id]=v;
            }
        }
        //console.log(obj)
        this.assign({'fields':fields,'extend_fields':extend_fields,'allfields':obj,'info':data})
        this.active="admin/model/index"
        this.meta_title = "编辑模型"

    this.display();

    }

    /**
     * 生成模型
     * @returns {*}
     */
    generateAction(){
        this.active="admin/model/index"
        this.meta_title = "生成模型"
        return this.display()
    }

    /**
     * 删除模型模型
     */
   async delAction (){
        let ids = this.get('id');
        think.isEmpty(ids) && this.fail("参数不能为空")
        let res = await this.db.del(ids)
        if(!res){
            this.fail("删除失败");
        }else {
            this.success({name:"删除成功！"});
        }
    }
}
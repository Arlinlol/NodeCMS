'use strict'
/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 */

global.mytags= function(){

        this.tags= ['tagtest'];
        this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args)
        };
        this.run = async function (context, args, callback) {
             console.log(args);

            for (var arg in args) {
                console.log(arg);
                if (arg !== '__keywords') {
                  let map = args[arg].split(",");
                   let maps={}
                    for(let val of map){
                        val=val.split("=");
                          console.log(val[1].indexOf("["));
                        if(val[1].indexOf("[")===0){
                            val[1]=val[1].replace("[", "").replace("]", "").split("-");
                            console.log(val[1]);
                        }
                        maps[val[0]]=val[1]
                    }
                    console.log(maps);
                    let model_id;
                    //model
                    if(think.isEmpty(maps.mid)){
                        model_id = 1;
                    }else {
                        model_id=maps.mid;
                        delete maps.mid;
                    }
                    let model = await think.model("model", think.config("db"),'admin').get_table_name(model_id);
                    console.log(model);
                    //limit
                    let offset,length;
                    if(think.isEmpty(maps.limit)){
                        offset = 10;
                    }else {
                        if(think.isArray(maps.limit)){
                            offset=parseInt(maps.limit[0]);
                            length=parseInt(maps.limit[1]);
                        }else {
                            offset = parseInt(maps.limit);
                        }
                        delete maps.limit;
                    }
                    //where
                    let where={};
                    if(!think.isEmpty(maps.cid) && think.isNumberString(maps.cid)){
                        where.category_id = maps.cid;
                    }
                    let order ;
                    if(!think.isEmpty(maps.order)){
                        order = maps.order;
                    }
                    console.log(maps);
                    console.log(offset);
                    let data = await think.model(model, think.config("db")).where(where).limit(offset,length).order(order).select();
                    //console.log(data);
                    context.ctx[arg] = data;
                }
            }
           return callback(null,'');
        };

}
/**
 * 获取通缉栏目标签
 */
global.column= function(){

    this.tags= ['column'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args)
    };
    this.run = async function (context, args, callback) {
        console.log(args);
        let data = think.isEmpty(args.data) ?"data":args.data;
        let pid = !think.isEmpty(args.pid) ?args.pid:false;
        let cid = !think.isEmpty(args.cid) ?args.cid:false;
        let column = await think.model('category', think.config("db"),'admin').get_all_category();
        let arr=[];
        //获取同级栏目
        if(pid){
            for (let val of column){
               if(val.pid == pid){
                   arr.push(val);
               }
            }
        }
        //获取子栏目
        if(cid){
            for (let val of column){
                if(val.pid == cid){
                    arr.push(val);
                }
            }
        }
        context.ctx[data] = !think.isEmpty(arr)?arr:false;
        return callback(null,'');
    };

}


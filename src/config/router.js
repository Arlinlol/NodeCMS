module.exports = [
  //每一条路由规则也为一个数组，数组里面的项分别对应为：match、pathname、method、options：
  ['', 'home/index/index', 'get'],
  ['/index', 'home/index/index', 'get'],
  ['/index/:order', 'home/index/index', 'get'],
  ['/p/:id', 'home/detail/index', 'get'],
  ['/dlink/:id', 'home/detail/downloadgetid', 'get'],
  ['/u/avatar', 'center/index/avatar', 'get'],
  ['/u/avatar/:uid', 'center/index/avatar', 'get'],
  ['/search', 'home/search/index', 'get'],
  ['/topic', 'home/keyword/index', 'get'],
  ['/topic/:key', 'home/keyword/index', 'get'],
  ['/t/:key', 'home/keyword/list', 'get'],
  ['/admin/mod/:cate_id', 'cmswing/modadminbase/index', 'get'],
  ['/q/:id', 'mod/question/index/detail', 'get'],
  [/\/api\/(\w+)(?:\/(\d+))?/, 'api/:1?id=:2', 'rest'],
  // [/^(?!\/admin\/|\/home\/|\/center\/|\/api\/|\/uxxx\/):id/i, '/home/route/index/:1/', 'get'],
  ['/:category', 'cmswing/route/index', 'get']
];

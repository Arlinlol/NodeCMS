var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
  APP_PATH: rootPath + path.sep + 'app',
  ROOT_PATH: rootPath,
  RESOURCE_PATH: __dirname,
  CMSWING_VERSION:'1.0.0',
  env: 'development'
});

//compile src/ to app/
instance.compile({
  retainLines: true, 
  log: true
});

instance.run();
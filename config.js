
// var ProjectName=require('./projectName');
// var src=ProjectName+'www/src';
var src = __dirname + '/wxapp';
var dist = __dirname + '/wxapp';

module.exports = {
  project: 'ProjectName',
  src: src,
  dist: dist,
  create: function (val, valcg) {
    return {
      src: src + '/**/*.' + val,
      dist: dist,
      distcg: dist + '/**/*.' + valcg || val,
      distonly: dist + '' + val
    }
  },
  scss: {
    src: src + '/**/*.scss',
    watchSrc: 'wxapp/**/*.scss',
    dist: src,
    set: {

    }
  },
  less: {
    src: src + '/**/style.less',
    watchSrc: src + '/**/*.less',
    dist: dist,
    distcg: dist + '/**/*.css',
    distonly: dist + '/css',
    set: {

    }
  },
  js: {
    src: src + '/**/*.js',
    watchSrc: 'wxapp/**/*.js'
  },
  browsers: [
    'chrome >= 40',
    'safari >= 6',
    'ios >= 7',
    'android >= 4.3'
  ]
}

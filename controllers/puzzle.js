let API_HOST = "http://wx.com";
const Mock = require('../utils/mock.js');
let DEBUG = true;//切换数据入口
function ajax(data = '', fn, method = "get", header = {}) {
  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  } else {
    // 模拟数据
    var res = Mock.mock({
      'error_code': '',
      'error_msg': '',
      'data|10': [{
        'id|+1': 1,
        'img': 'https://picsum.photos/100/100/?image=' + '@integer(60, 100)',
        'number': '@integer(1, 10)',
        'price': '@float(60, 100, 1, 2)',
        'discount': '@float(1, 10, 1, 2)',
        'sold': '@integer(100, 10000)', 
        'piece': '@integer(10, 100)',
        'name': '@ctitle(3, 8)' + '@integer(10, 100)'+'g'
      }]
    })
    fn(res);
  }
}
module.exports = {
  ajax: ajax
}
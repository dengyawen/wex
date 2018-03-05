//index.js
var BANNER = require('../../controllers/banner.js')
var SECKILL = require('../../controllers/seckill.js')
var PUZZLE = require('../../controllers/puzzle.js')
var NAV = require('../../controllers/nav.js')
console.log(NAV)
//获取应用实例
var app = getApp()

Page({
  data: {
    topScroll: [],
    footerNav: [],
    bannerIcon: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    pageIndex: 1,
    pageSize: 10,
    loading: true,
    loadtitle: "正在加载...",
    hasMore: true,
    guessProducts: [],
  },

  onLoad: function () {
    var that = this
    BANNER.ajax('', function (res) {
    //轮播
      that.setData({
        list: res.data
      })
    });
    //秒杀商品
    SECKILL.ajax('', function (res) {
      that.setData({
        skill: res.data
      })
    });
    //拼团
    PUZZLE.ajax('', function (res) {
      that.setData({
        puzzle: res.data
      })
    });
    this.setData({
      navList: NAV.navList
    })
  },
  onReady() {
    var _this = this
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title: "首页"
    })
  },
  onShow() {
    wx.setNavigationBarTitle({
      title: "首页"
    })
  },
})
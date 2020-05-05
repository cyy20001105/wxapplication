var app=getApp();
Page({
  data: {
    userInfo:{},
    hasUserInfo:false,
  },
  onLoad: function (options) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
      console.log(this.data.userInfo);
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo:true
    })
  },
  onReady: function () {
    
  },
  onShow: function () {
    
  },
  onHide: function () {
    
  },
  onUnload: function () {
    
  },
  onPullDownRefresh: function () {
    
  },
  onReachBottom: function () {
    
  },
  onShareAppMessage: function () {
    
  },
  tapAssign:function(){
    wx.navigateTo({
      url: '../my_assign/my_assign',
    });
  },
  tapTake:function(){
    wx.navigateTo({
      url: '../take_assign/take_assign',
    })
  },
  tapBlack:function(){
    wx.navigateTo({
      url: '../black_list/black_list',
    })
  }
})
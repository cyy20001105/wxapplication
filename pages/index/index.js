var app=getApp();
const db=wx.cloud.database();
const assignments=db.collection('assignments');
const _=db.command;
Page({
  data: {
    userInfo:{},
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo:false,
    list:[],
    list2:[{title:1},{title:2}]
  },
  onLoad: function (res) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globaldata.userInfo,
        hasUserInfo:true
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback=(res)=>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    }else{
      wx.getUserInfo({
        success: (res) => {
          app.globalData.userInfo=res.userInfo;
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })
        },
      })
    };
    assignments.orderBy('reward','asc').get({
      success:(res)=>{
        console.log(res);
        this.setData({
          list:res.data
        })
      }
    });
    wx.setNavigationBarTitle({
      title: '华工任务榜',
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
  createAssign:function(){
    console.log(this.data.list);
    console.log(this.data.list2);
    if(!this.data.hasUserInfo){
      wx.showToast({
        title: '请先登陆',
        success:(res)=>{
          wx.switchTab({
            url: '../person/person',
          })
        }
      })
      return;
    }
    wx.navigateTo({
      url: '../new_assign/new_assign',
    });
  }, 
  lookDetail:function(e){
    console.log(e);
    var ind=e.currentTarget.dataset.index;
    var info=this.data.list[ind];
    var item,st="";
    for(item in info) 
      if(item!=='_openid')
        st+=item+"="+info[item]+"&";
    console.log(st);
    wx.navigateTo({
      url: '../detail/detail?'+st,
    })
  },

})

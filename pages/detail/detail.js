Page({
  data: {
    deal_type:'',
    description:'',
    reward:0,
    title:'',
    where_complete:'',
    where_handle:'',
    _id:'',
    has_take:false,
  },
  onLoad: function (info) {
    console.log(info);
    wx.setNavigationBarTitle({
      title: '任务详细信息',
    })
    this.setData({
      deal_type:info.deal_type,
      description:info.description,
      reward:Number(info.reward),
      title:info.title,
      where_complete:info.where_complete,
      where_handle:info.where_handle,
      _id:info._id
    });
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
    
  }
})
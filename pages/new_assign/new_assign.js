const db=wx.cloud.database();
const assignments=db.collection('assignments');
Page({
  data: {
    offLine:false
  },
  onLoad: function (options) {
    
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
  submit:function(e){
    console.log(e);
    assignments.add({
      data:{
        title:e.detail.value.title,
        reward:Number(e.detail.value.reward),
        where_complete:e.detail.value.where_complete,
        where_handle:e.detail.value.where_handle,
        deal_type:e.detail.value.deal_type,
        description:e.detail.value.description,
      },
      success:function(res){
        console.log(res);
      }
    })
  },
  changeChoose:function(res){
    console.log(res);
    this.setData({
      offLine:res.detail.value==='offLine'
    })
  }
})
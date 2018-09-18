// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"点击选择，要勾选哦~"
  },
  obj:{
    type:'sell'
  },
  selAddress(){
    wx.chooseLocation({
      success: (res)=>{
        this.setData({
          address: res.address
        })
        Object.assign(this.obj,{
          address:res.address,
          longitude:res.longitude,
          latitude:res.latitude
        })
         console.log(this.obj)
      }
    })
  },
  typeChange(e){
    // console.log(e)
    this.obj.type = e.detail.value
  },
  inputdesc(e){
    this.obj.desc = e.detail.value
  },
  inputcontact(e) {
    this.obj.contact = e.detail.value
  },
  save(){
    // console.log(this.obj)
    if(!this.obj.desc){
      wx.showToast({
        title: '请输入描述',
        icon:"loading",
        duration:2000,
        mask:true
      })
      return
    }else if(!this.obj.contact){
      wx.showToast({
        title: '请输入联系方式',
        icon:"loading",
        duration:2000,
        mask:true
      })
      return
    }

    wx.request({
      url: 'http://localhost:3000/list',
      data: this.obj,
      header: { 'content-type': 'application/json' },
      method: 'POST',
      success: (res) => {
        this.setData({
          suc: true
        })
      }
    })
  },
  go(){
    wx.navigateBack({
      delta: 1,
    })
  },
  re(e){
    console.log(e.detail.c)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
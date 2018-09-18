//app.js
App({
  onLaunch: function () {
    var res = wx.getSystemInfoSync()
    // console.log(res)
    this.globalData.windowWidth = res.windowWidth
    this.globalData.windowHeight = res.windowHeight
  },
  globalData: {
    userInfo: null
  }
})
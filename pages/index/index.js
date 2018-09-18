var app = getApp()
Page({
  data:{
    markers:[],
    controls: [
      {
        id: 1,
        iconPath: '/resources/pin.png',
        position: {
          left: (app.globalData.windowWidth-30)/2,
          top: ((app.globalData.windowHeight - 30) / 2)-30,
          width: 30,
          height: 30
        },
        clickable: true
      },
      {
        id: 1,
        iconPath: '/resources/center.png',
        position: {
          left:20,
          top:app.globalData.windowHeight-100,
          width: 30,
          height: 30
        },
        clickable: true
      }
    ]
  },
  controltap(){
    this.mapCtx.moveToLocation()
  },
  onShow(){
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success:(res)=> {
        // console.log(res)
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      }
    })
    wx.request({
      url: 'http://localhost:3000/list',
      header: { "content-type":"application/json"},
      methods:'GET',
      success:(res)=>{
        // console.log(res.data)
        let markers = res.data.map((item)=>{
          return {
            iconPath: "/resources/" + item.type + ".png",
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            width: 30,
            height: 30
          }
        })
        this.setData({
          markers
        })
      }
    })
  },
  go(){
    wx:wx.navigateTo({
      url: '/pages/publish/publish'
    })
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('map')
  },
  onShareAppMessage: function (res) {
    return {
      title: '萌宠交易平台',
      path: '/page/index/index'
    }
  },
  markertap(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.markerId
    })
  },
  search(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})

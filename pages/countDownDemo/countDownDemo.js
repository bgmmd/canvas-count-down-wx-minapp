// pages/countDownDemo/countDownDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false
  },
  countOver() {
    this.setData({
      isEnd: true
    })
  },
  beginCount() {
    const coutDownRef = this.selectComponent('#count-demo')
    coutDownRef.start()
  },
  stopCount(){
    const coutDownRef = this.selectComponent('#count-demo')
    coutDownRef.pause()
  },
  resetCount(){
    const coutDownRef = this.selectComponent('#count-demo')
    coutDownRef.reset()
    this.setData({
      isEnd:false
    })
  },
  countStopCallback(){
    console.log('count-down触发了暂停')
  },
  countResetCallback(){
    console.log('count-down触发了重置')
  }


})
// components/countDown/countDown.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    total: {
      type: Number,
      value: 10
    },
    fontSize: {
      type: Number,
      value: 16
    },
    fontColor: {
      type: String,
      value: '#000'
    },
    width: {
      type: String,
      value: '100rpx'
    },
    height: {
      type: String,
      value: '100rpx'
    }
  },

  /**
   * 组件的初始数据
   */

  data: {
    timer: null,
    totalSecond: null,
    totalSecond: '',
    ctx: null,
    canvasWidth: '',
    canvasHeight: ''
  },
  lifetimes: {
    attached() {
      this.data.totalSecond = this.properties.total
      this.createSelectorQuery()
        .select('#myCanvas') // 在 WXML 中填入的 id
        .fields({
          node: true,
          size: true
        })
        .exec((res) => {
          // console.log(res)
          // Canvas 对象
          const canvas = res[0].node
          // Canvas 画布的实际绘制宽高
          const renderWidth = res[0].width
          const renderHeight = res[0].height
          // Canvas 绘制上下文
          this.data.ctx = canvas.getContext('2d')
          // 初始化画布大小
          const dpr = wx.getWindowInfo().pixelRatio
          canvas.width = renderWidth * dpr
          canvas.height = renderHeight * dpr
          this.data.canvasWidth = renderWidth
          this.data.canvasHeight = renderHeight
          this.data.ctx.scale(dpr, dpr)
          this.data.ctx.font = `${this.properties.fontSize}px sans-serif` //设置字体大小
          this.data.ctx.fillStyle = this.properties.fontColor //设置字体颜色
          // console.log(this.data.ctx)
          // console.log(this.data)
          this.data.ctx.textAlign = 'center' //设置居中
          this.data.ctx.fillText(this.data.totalSecond, this.data.canvasWidth / 2, this.data.canvasHeight / 2 + this.data.fontSize / 2)
        })
      
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    start() {
      if(this.data.totalSecond<=0)return
      const that = this
      this.data.timer = setInterval(() => {
        this.data.totalSecond = this.data.totalSecond - 1
        this.data.ctx.clearRect(0, 0, this.data.canvasWidth, this.data.canvasHeight) //清除画布，避免上次绘制文本与此次重叠
        this.data.ctx.fillText(this.data.totalSecond, this.data.canvasWidth / 2, this.data.canvasHeight / 2 + this.data.fontSize / 2)
        if (this.data.totalSecond <= 0) {
          clearInterval(this.data.timer)
          this.triggerEvent('countEnd')
        }
      }, 1000)
    },
    pause(){
      if(!this.data.timer) return
      clearInterval(this.data.timer)
      this.triggerEvent('countPause')
    },
    reset(){
      if(this.data.totalSecond==this.properties.total) return
      if(!this.data.timer) return
      clearInterval(this.data.timer)
      this.data.totalSecond = this.properties.total
      //重新绘制
      this.data.ctx.clearRect(0, 0, this.data.canvasWidth, this.data.canvasHeight) //清除画布，避免上次绘制文本与此次重叠
      this.data.ctx.fillText(this.data.totalSecond, this.data.canvasWidth / 2, this.data.canvasHeight / 2 + this.data.fontSize / 2)
      this.triggerEvent('countReset')
    }

  }
})
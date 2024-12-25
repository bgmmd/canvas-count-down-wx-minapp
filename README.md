# canvas-count-down-wx-minapp
A WeChat Mini Program Countdown Component Library Implemented with Canvas
一个使用canvas实现的微信小程序倒计时组件库

## How to use



git clone https://github.com/bgmmd/canvas-count-down-wx-minapp.git



## Document

组件prop

| 参数      | 说明               | 类型   | 默认值        |
| :-------- | ------------------ | ------ | ------------- |
| total     | 倒计时时长，单位秒 | number | 10            |
| fontSize  | 倒计时字体大小     | number | 16 （单位px） |
| fontColor | 字体颜色           | string | #000          |
| width     | canvas宽           | string | 100rpx        |
| height    | canvas高           | string | 100rpx        |



组件events

| 事件名          | 说明             | 回调参数 |
| --------------- | ---------------- | -------- |
| bind:countPause | 倒计时终止时触发 | 无       |
| bind:countEnd   | 倒计时结束时触发 | 无       |
| bind:countReset | 倒计时重置时触发 | 无       |



组件调用方法

**使用selectComponent可以获取到 CountDown 实例并调用实例方法。**

| 方法名 | 参数 | 返回值 | 介绍       |
| :----- | :--- | :----- | :--------- |
| start  | -    | -      | 开始倒计时 |
| pause  | -    | -      | 暂停倒计时 |
| reset  | -    | -      | 重设倒计时 |

示例代码

```js
 const coutDownRef = this.selectComponent('#count-demo') //获取组件示例
 coutDownRef.start()//调用组件开始方法
```


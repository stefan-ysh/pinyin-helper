# pinyin-helper

一个可以帮你学习拼音的微信小程序。

A wechat miniprogram that helps someone to learn Pinyin.

## get started

1. 到 GitHub 下载 [`iView Weapp`](https://github.com/TalkingData/iview-weapp) 的代码，将 dist 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的[文档](https://weapp.iviewui.com/docs/guide/start)页查看

   Download the [`iview Weapp`](https://github.com/TalkingData/iview-weapp) repository on `github`,copy the `dist` directory and paste it in root directory.Then use the component as follows，take button as an example.

   > 添加需要的组件,在页面的 json 中配置（路径根据自己项目位置配置）
   >
   > Register components that you used(or you are going to use) in `.json` files .

   ```javascript
   "usingComponents": {
       "i-button": "../../dist/button/index"
   }
   ```

2. 在 wxml 中使用组件：

   Using component in `.wxml` files.

   ```html
   <i-button type="primary" bind:click="handleClick"> 这是一个按钮 </i-button>
   ```

## online demo

1. 微信搜索 `PinyinHelper` 小程序即可体验

   You can experience it by searching 'PinyinHelper' on wechat.

2. 用手机微信扫描下方二维码即可体验

   Scan this QR code by your wechat.
   <!-- ![QR_code](./img/mini_program_QR_code.jpg) -->
   <img src="./img/mini_program_QR_code.jpg" style="width:200px;" />

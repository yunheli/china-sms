# china-sms

![Build Status Images](https://travis-ci.org/yunheli/china-sms.svg?branch=master)

> 目标集成全国所有的发送短信的接口 初始化一下 调用就好 现在只集成了 云片
- npm install china-sms
- 云片的使用
```js
  var YP = require('china-sms').Yunpian
  var yp = new YP('appKey')
  var hash={mobile:'',text:''}
  yp.sendSms(hash,function(err,body){
  })
```

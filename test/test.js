var Yunpian = require('./lib/yunpian')


var tpl1 = '【fir.im】活动在海淀大街34号海置创投6层，地铁中关村站E口出向西走，可参考：http://j.map.baidu.com/U5kB3';
var tpl2 = '【fir.im】很高兴你可以来陪 fir.im 一起过生日，今天下午13：40开始签到，聚会地点是：海淀大街34号海置创投6层 ，下午见~~';
SMS = new Yunpian('7c091a4058dad46659eeb9fdb0875023')


hash = {
  mobile: '13581648716',
  text: tpl2
}

SMS.sendSms(hash,function(err,body){
  console.log(err,body)
})



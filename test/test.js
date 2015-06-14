var Yunpian = require('./lib/yunpian')


var tpl1 = '';
var tpl2 = '';
SMS = new Yunpian('****************************')


hash = {
  mobile: '13581648716',
  text: tpl2
}

SMS.sendSms(hash,function(err,body){
  console.log(err,body)
})



var Yunpian = require('../lib/yunpian')


var tpl = '';
var arr_str = ""
SMS = new Yunpian('')


hash = {
  mobile: arr_str,
  text: tpl
}

SMS.sendSms(hash, function(err,body){
  console.log(err,body)
})



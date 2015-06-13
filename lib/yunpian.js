var apiKey = ""
var request = require('request');

var sendSmsUrl = 'http://yunpian.com/v1/sms/send.json';
var pullStatsUrl = 'http://yunpian.com/v1/sms/pull_status.json';

function YP(key){
  this.apikey = key
}

YP.prototype.sendSms = function(hash,cb){
  var form = {
    apikey: this.apikey,
    mobile: hash["mobile"],
    text: hash["text"]
  }
  request.post({
    url: sendSmsUrl,
    form: form
  },function(err,response,body){
    if(err){
      console.log(err)
      return cb(err)
    }
    cb(null,body)
  })
}

module.exports = YP;



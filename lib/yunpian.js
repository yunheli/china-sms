var apiKey = ""
var request = require('request');

var sendSmsUrl = 'http://yunpian.com/v1/sms/send.json';
var pullStatsUrl = 'http://yunpian.com/v1/sms/pull_status.json';
var getUserUrl = 'http://yunpian.com/v1/user/get.json';
var putUserUrl = 'http://yunpian.com/v1/user/set.json';
var getDefaultTemplateUrl = 'http://yunpian.com/v1/tpl/get_default.json';
var addTemplateUrl = 'http://yunpian.com/v1/tpl/add.json';
var getTemplateUrl = 'http://yunpian.com/v1/tpl/get.json';
var putTemplateUrl = 'http://yunpian.com/v1/tpl/update.json';
var delTemplateUrl = 'http://yunpian.com/v1/tpl/del.json';
var getSmsStatusUrl = 'http://yunpian.com/v1/sms/pull_status.json';
var getSmsReplyUrl = 'http://yunpian.com/v1/sms/pull_reply.json';
var getSmsBlackWordUrl = 'http://yunpian.com/v1/sms/get_black_word.json';


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

YP.prototype.getUser = function(cb){
  var form = {
    apikey: apiKey
  }
  request.post({
    url: getUserUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}

YP.prototype.putUser = function(hash,cb){

  var form = {
    apikey: apiKey
  }

  if(hash["emergency_contact"]){
    form["emergency_contact"] = hash["emergency_contact"]
  }

  if(hash["emergency_mobile"]){
    form["emergency_mobile"] = hash["emergency_mobile"]
  }

  if(hash["alarm_balance"]){
    form["alarm_balance"] = hash["alarm_balance"]
  }
  request.post({
    url: putUserUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}

YP.prototype.getDefaultTemplate = function(hash,cb){

  var form = {
    apikey: apiKey
  }

  if(hash["tpl_id"]){
    form["tpl_id"] = hash["tpl_id"]
  }
  request.post({
    url: getDefaultTemplateUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}


YP.prototype.getTemplate = function(hash,cb){

  var form = {
    apikey: apiKey
  }

  if(hash["tpl_id"]){
    form["tpl_id"] = hash["tpl_id"]
  }
  request.post({
    url: getTemplateUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}

YP.prototype.addTemplate = function(hash,cb){

  var form = {
    apikey: apiKey
  }

  if(hash["tpl_content"]){
    form["tpl_content"] = hash["tpl_content"]
  }
  if(hash["notify_type"]){
    form["notify_type"] = hash["notify_type"]
  }

  request.post({
    url: addTemplateUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}

YP.prototype.putTemplate = function(hash,cb){

  var form = {
    apikey: apiKey
  }

  if(hash["tpl_content"]){
    form["tpl_content"] = hash["tpl_content"]
  }
  if(hash["tpl_id"]){
    form["tpl_id"] = hash["tpl_id"]
  }

  request.post({
    url: putTemplateUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}

YP.prototype.delTemplate = function(hash,cb){

  var form = {
    apikey: apiKey
  }
  if(hash["tpl_id"]){
    form["tpl_id"] = hash["tpl_id"]
  }

  request.post({
    url: delTemplateUrl,
    form: form
  },function(err,response,body){
    cb(err,body)
  })
}







module.exports = YP;



console.log('**** users controller');
var mongoose = require('mongoose');

var Apps = mongoose.model('Apps');

function AppsController(){

  this.index = function(req,res){
    Apps.find({},function(err,returned_data){
      if(err){
        console.log(err);
        res.json({error: err})
      }
      else{
        res.json({success: returned_data})
      }
    })
  }



  this.create = function(req,res){
    console.log(req.body);
    var app = new Apps(req.body);
    app.save(function(err, returned_data){
      if(err){
        console.log('\n*** error ***\n');
        console.log(err);
      }
      else {
        res.json({success: returned_data});
      }
    })
  }

  this.delete = function(req,res){
    console.log(req.params.id);
    Apps.remove({_id: req.params.id}, function(err, returned_data){
      if(err){
        console.log(err);
        res.json({error: err})
      }
      else {
        console.log(JSON.stringify(returned_data));
        res.json({success: returned_data})
      }
    })
  }



}
appsController = new AppsController();
module.exports = appsController;

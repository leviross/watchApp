/**
 * WatchController
 *
 * @description :: Server-side logic for managing watches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'justwyoming-com',
  api_key: '272964572993666',
  api_secret: 'KNY4tsLlGAmcsfUnF4IiBdkxMdw'
  //enhance_image_tag: true  FROM RAILS APP
  //static_image_support: true
});

module.exports = {

  create:function(req,res){
    var watchData = {
      brand:req.body.brand,
      modelNum:req.body.modelNum,
      name:req.body.name,
      price:req.body.price,
      used:req.body.used,
      //photo_url:
      owner:req.session.user.id
    }
    Watch.create(watchData).exec(function(err,watch){
      if(err) res.send(400,err);
      watch.owner=req.session.user;
      Watch.publishCreate(watch);
      res.send(watch);
    });
  },


  upload: function (req, res) {
    var imageFile = req.body.file;
    }
    req.file('image').upload(function (err, uploadedFiles) {
      if (err) {
        return res.send(500, err);
      } else {
        cloudinary.uploader.upload(uploadedFiles[0].fd, function(result) {
        Images.update(req.param('id'), {imagePath: result.url}, function imageUpdated (err) {
          if (err) {
            console.log(err);
            return res.redirect('/');
          }
        res.redirect('/image/upload/' + req.param('id'))
        });
        });
      }
    });
  }



};


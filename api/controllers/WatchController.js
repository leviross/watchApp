/**
 * WatchController
 *
 * @description :: Server-side logic for managing watches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 // Cloudinary initialization and configuration
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

        var imageFile1 = req.body.image_file1;
        var imageFile2 = req.body.image_file2;
        var imageFile3 = req.body.image_file3;

        cloudinary.uploader.upload(imageFile1, function(result){
            var publicID1 = result.public_id;
            console.log(result);
        });
        cloudinary.uploader.upload(imageFile2, function(result){
            var publicID2 = result.public_id;
            console.log(result);
        });
        cloudinary.uploader.upload(imageFile3, function(result){
            var publicID3 = result.public_id;
            console.log(result);
        });

            var imageArray = [publicID1,publicID2,publicID3];



            var watchData = {
              brand:req.body.brand,
              modelNum:req.body.modelNum,
              name:req.body.name,
              price:req.body.price,
              used:req.body.used,
              image_url: imageArray,
              owner: req.session.user.id || 0
            }


            Watch.create(watchData).exec(function(err,watch){
                if(err) res.send(400,err);
                  Watch.publishCreate(watch);
                  console.log(watch);
                  res.send(watch);

            });



    }

};






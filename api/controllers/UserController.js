/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    update: function(req, res){
        console.log('THIS IS REQ.BODY: ', req.body);
        //console.log('Owners ID is: ', req.body.userCart.owner.id);

        var userID = req.body.userCart.owner.id;
        var watch = {
            brand: req.body.brand,
            modelNum: req.body.modelNum,
            name: req.body.name,
            price: req.body.price,
            image_url: req.body.image_url[0],
            id: req.body.id
        }

        // TODO: USE THIS TO SAVE USERS ID req.session.user.id
        // User.update({id:userID},{userCart:watchID}).exec(function(err,updated){
        //     if(err) return res.send(400, err);
        //     console.log(updated);
        //     res.send(updated);
        // });
        User.findOne(userID).exec(function(err,user){

            user.userCart.push(req.body.id);
            user.save(function(err,user){
                if(err) return console.log(err);
                //console.log('THIS IS THE USER FOUND',user);
                console.log(user);
            });
        });

    }

};


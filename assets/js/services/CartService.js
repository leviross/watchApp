watchApp.factory('CartService',['$q','$http','UserService',function($q,$http,UserService){

    //problem is that when page reloads, userCart will initialize to an empty array which deletes the whole cart

    var userCart=[];
    var cart = null;

    return {
        //TODO: finish saving cart either to User model below or save cart to session or to local storage
        addUserCart: function(watchObj){
            UserService.check(function(err,data){
                //console.log(data);
                var userID = data.user.id;

                //var watch = {userCart: watchObj};
                $http.put('/api/user/'+userID, watchObj)
                .success(function(data){
                    console.log("successfully updated the Users cart.");

                })
                .error(function(err){
                    console.log(err);
                });


            });
        },

        getUserCart: function(){
            UserService.check(function(err,session){

                var userID = session.user.id;
                var defer = $q.defer();

                $http.get('/api/user/'+userID)
                .success(function(userRecord){
                    console.log(userRecord.userCart);
                    //cart = userRecord.userCart;
                    defer.resolve(userRecord)
                })
                .error(function(err){
                    alert(err);
                });
                return defer.promise;
            });

        },
        //successfully adds a new watch object to userCart array
        addToCart: function(newObj){
            userCart.push(newObj);
            console.log(userCart);
        },
        //retrieves userCart upon call
        getCart: function(){
            console.log(userCart);
            return userCart;
        },
        //deletes item from the array
        removeFromCart: function(idx){
            userCart.splice(idx,1);
        }



    };





}]);


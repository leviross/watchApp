watchApp.factory('CartService',['$http','UserService',function($http,UserService){


    var userCart=[];

    var getUserCart = function(){
        var userWatch = {cart:[array]}
        $http.get('/api/user',userWatch)
        .sucess(function(data){
            alert('got users cart array');

        })
        .error(function(err){
            alert(err);
        })
    }

    var addToCart = function(newObj){
        userCart.push(newObj);
        console.log(userCart);
    }

    var getCart = function(){
        console.log(userCart);
        return userCart;
    }

    var removeFromCart = function(idx){
        userCart.splice(idx,1);
    }

    return{
        addToCart: addToCart,
        getCart: getCart,
        removeFromCart: removeFromCart,
        getUserCart: getUserCart
    };





}]);


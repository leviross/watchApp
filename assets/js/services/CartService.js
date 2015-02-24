watchApp.factory('CartService',['UserService',function(UserService){


    // UserService.check(function(err,data){
    //     console.log('check',err,data);
    // });

    var userCart=[];

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
        removeFromCart: removeFromCart
    };





}]);

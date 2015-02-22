watchApp.factory('CartService',[function(){


    var userCart=[];

    var addToCart = function(newObj){

        userCart.push(newObj);
        console.log(userCart);
    }

    var getCart = function(){
        console.log(userCart);
        return userCart;
    }

    return{
        addToCart: addToCart,
        getCart: getCart
    };




}]);
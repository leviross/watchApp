watchApp.factory('CartService',['$http','UserService',function($http,UserService){

    //problem is that when page reloads, userCart will initialize to an empty array which deletes the whole cart

    var userCart=[];

    //TODO: finish saving cart either to User model below or save cart to session or to local storage
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
    //successfully adds a new watch object to userCart array
    var addToCart = function(newObj){
        userCart.push(newObj);
        console.log(userCart);
    }
    //retrieves userCart upon call
    var getCart = function(){
        console.log(userCart);
        return userCart;
    }
    //deletes item from the array
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


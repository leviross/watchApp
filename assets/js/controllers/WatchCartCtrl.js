watchApp.controller('WatchCartCtrl',['$scope','CartService','UserService',function($scope,CartService,UserService){


    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
        //console.log("Watching UserService");
    });

    // if(UserService.currentUser){
    //     $scope.CartService = CartService;
    //     $scope.$watchCollection('CartService',function(){
    //         $scope.watches = CartService.getUserCart();
    //         console.log("Watching CartService");
    //     });
    // }else{
    //     $scope.watches = CartService.getCart();
    // }



    //TRYIN TO FIGURE OUT A WAY TO SAVE THE CART ON PAGE RELOAD, OR SAVE CART TO USER ACCOUNT
    //$scope.watches = [];
    if(UserService.currentUser){
        // alert('user logged in!!!!!:)')
        // var array = CartService.getUserCart();
        // $scope.watches = array;
        // console.log("Scope.watches = CartService.getUserCart. Why isnt it pulling it up though?");
        $scope.watches = [];
        $scope.watches.push(CartService.getUserCart());
    }else{
        $scope.watches = CartService.getCart();
    }


    // $scope.total = function(){
    //     var total = 0;
    //     angular.forEach($scope.watches, function(item){
    //         total += item.price;
    //     });
    //     return total;
    // }

    $scope.removeItem = function(idx){
        swal({
            title: "Removed",
            text: "That watch has been removed from your cart",
            type: "warning",
            timer: 2500
          });
        CartService.removeFromCart(idx);
    }




}]);
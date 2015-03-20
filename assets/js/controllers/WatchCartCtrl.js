watchApp.controller('WatchCartCtrl',['$scope','$routeParams','$location','CartService','UserService',function($scope,$routeParams,$location,CartService,UserService){


    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
        //console.log("Watching UserService");
    });

    //TRYIN TO FIGURE OUT A WAY TO SAVE THE CART ON PAGE RELOAD, OR SAVE CART TO USER ACCOUNT

    if($scope.currentUser){
        $scope.watches = CartService.getUserCart();
    }else{
        $scope.watches = CartService.getCart();
    }


    $scope.total = function(){
        var total = 0;
        angular.forEach($scope.watches, function(item){
            total += item.price;
        });
        return total;
    }

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
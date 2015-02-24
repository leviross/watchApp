watchApp.controller('WatchCheckoutCtrl',['$scope','$http','$routeParams','CartService','UserService',function($scope,$http,$routeParams,CartService,UserService){


    $scope.watches = CartService.getCart();

    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    $scope.total = function() {
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
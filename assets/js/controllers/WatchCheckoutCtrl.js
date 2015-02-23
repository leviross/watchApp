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
        alert("clicked on remove");
        CartService.removeFromCart(idx);
    }


}]);
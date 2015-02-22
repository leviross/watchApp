watchApp.controller('WatchCartCtrl',['$scope','$routeParams','$location','CartService',function($scope,$routeParams,$location,CartService){


    // $scope.UserService = UserService;
    // $scope.$watchCollection('UserService',function(){
    //     $scope.currentUser=UserService.currentUser;
    // });




    $scope.watches = CartService.getCart();

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
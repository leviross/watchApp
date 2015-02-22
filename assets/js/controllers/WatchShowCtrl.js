watchApp.controller('WatchShowCtrl',['$scope','$rootScope','$http','$routeParams','$location','$modal','CartService',function($scope,$rootScope,$http,$routeParams,$location,$modal,CartService){

    var watchId = $routeParams.id;

    $scope.watches = [];

    if(watchId){
        $http.get('/api/watch/'+watchId)
        .success(function(data){
            console.log(data);
            $scope.watch=data;

            if($scope.watch.used){
              $scope.watch.used="Pre-Owned";
            }else{
              $scope.watch.used="New";
            }

          }).error(function(err){
                    //$location.path('/');
                    alert("That watch could not be found.");
                });
    }

    // $scope.CartService = CartService;
    $scope.addWatchToCart = function(currObj){
        alert("clicked on Add to Cart!");
        CartService.addToCart(currObj);
        $location.path('/cart');
    }



}]);
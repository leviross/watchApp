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
        swal({
            title: "Added!",
            text: "Here is your cart",
            type: "success",
            timer: 2500
          });
        CartService.addToCart(currObj);
        $location.path('/cart');
    }




}]);
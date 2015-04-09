watchApp.controller('WatchShowCtrl',['$scope','$http','$routeParams','$location','$modal','CartService','UserService',function($scope,$http,$routeParams,$location,$modal,CartService,UserService){

    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
        //console.log("Watching UserService");
    });

    var watchId = $routeParams.id;

    $scope.watches = [];

    if(watchId){
        $http.get('/api/watch/'+watchId)
        .success(function(data){
            //console.log(data);
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
        // swal({
        //     title: "Added!",
        //     text: "Here is your cart",
        //     type: "success",
        //     timer: 2500
        //   });

        if($scope.currentUser){
            //alert('user is logged in and adding to cart');
            CartService.addUserCart(currObj);
            $location.path('/cart');
        }else{
            CartService.addToCart(currObj);
            $location.path('/cart');
        }
    }




}]);
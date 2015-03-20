watchApp.controller('WatchShowCtrl',['$scope','$http','$routeParams','$location','$modal','CartService','UserService','ngCart',function($scope,$http,$routeParams,$location,$modal,CartService,UserService,ngCart){

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
            var userWatchArr ={cart:currObj}
            $http.patch('/api/user', userWatchArr)
            .success(function(data){
                alert('watch added to users cart array!');
                $location.path('/cart');
            })
            .error(function(err){
                alert(err);
            })
        }else{
            CartService.addToCart(currObj);
            $location.path('/cart');
        }
    }




}]);
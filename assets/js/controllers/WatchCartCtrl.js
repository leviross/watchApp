watchApp.controller('WatchCartCtrl',['$scope','$rootScope','$http','$routeParams','$location','$modal','CartService',function($scope,$rootScope,$http,$routeParams,$location,$modal,CartService){


    // $scope.UserService = UserService;
    // $scope.$watchCollection('UserService',function(){
    //     $scope.currentUser=UserService.currentUser;
    // });




    $scope.watches = CartService.getCart();

    //var watchId = $routeParams.id;


    // $http.get('/api/watch/'+watchId)
    // .success(function(data){
    //     console.log(data);
    //     $scope.watch=data;

    //     if($scope.watch.used){
    //       $scope.watch.used="Pre-Owned";
    //     }else{
    //       $scope.watch.used="New";
    //     }

    //     }).error(function(err){
    //         //$location.path('/');
    //         alert("That watch could not be found.");
    //         });

}]);
watchApp.controller('WatchCheckoutCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){


    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    var watchId=$routeParams.id;

    $http.get('/api/watch/'+watchId)
    .success(function(data){
        console.log(data);
        $scope.watch=data;
        }).error(function(){
            console.log(err);
            alert("That watch can't be found for some reason, try again.");
        });


}]);
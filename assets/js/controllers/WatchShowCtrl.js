watchApp.controller('WatchShowCtrl',['$scope','$http','$routeParams','$location','$modal',function($scope,$http,$routeParams,$location,$modal){

  var watchId = $routeParams.id;
  $scope.watches = [];

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

}]);
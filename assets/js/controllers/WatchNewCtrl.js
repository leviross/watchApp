watchApp.controller('WatchNewCtrl',['$scope','$http','$location',function($scope,$http,$location){
    $scope.createWatch = function(){
        $scope.alert=false;
        var data = {
            modelNum:$scope.modelNum,
            name:$scope.name,
            brand:$scope.brand,
            price:$scope.price,
            used:$scope.used
            //owner:$scope.session.user.id
        };
        $http.post('/api/watch',data).success(function(data){
            //$scope.alert="Your post has been created.";
            alert("Your post has been created.");

            $scope.modelNum="";
            $scope.name="";
            $scope.brand="";
            $scope.price="";
        }).error(function(err){
            alert(err);
        })
    }
}]);
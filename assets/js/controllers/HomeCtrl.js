watchApp.controller('HomeCtrl',['$scope','$http','filterFilter','UserService',function($scope,$http,filterFilter,UserService){


    $scope.watches = [];


    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });


    $scope.clearBrand = function(){
        $http(req).success(function(data){
            //console.log(data);
            $scope.watches = data;
        });
    }

    $scope.showBrand = function(brand){
        $http(req).success(function(data){
            //console.log(data);
            $scope.watches = data;
            return $scope.watches = filterFilter($scope.watches, {brand:brand});
        });
    }


    var req = {
        url:'/api/watch',
        params:{
            'sort':'createdAt desc'
        }
    };

    // Call to DB to pull up all watches
    $http(req).success(function(data){
        //console.log(data);
        $scope.watches = data;
    });




}]);
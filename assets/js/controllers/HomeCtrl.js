watchApp.controller('HomeCtrl',['$scope','$http','filterFilter','UserService',function($scope,$http,filterFilter,UserService){


    $scope.watches = [];


    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    $scope.showBrand = function(brand){
        return $scope.watches = filterFilter($scope.watches, {brand:brand});
    }

    $scope.clearBrand = function(){
        $http(req).success(function(data){
        //console.log(data);
        $scope.watches = data;
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
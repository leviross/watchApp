watchApp.controller('HomeCtrl',['$scope','$http','$modal','AlertService','$location','UserService',function($scope,$http,$modal,AlertService,$location,UserService){


    $scope.watches = [];


    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    var req = {
        url:'/api/watch',
        params:{
            'sort':'createdAt desc'
        }
    };

    // $http.get('url')
    $http(req).success(function(data){
        //console.log(data);
        $scope.watches = data;
    });




}]);
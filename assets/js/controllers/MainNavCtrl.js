watchApp.controller('MainNavCtrl',['$scope','$location','$modal','UserService',function($scope,$location,$modal,UserService){
    $scope.navCollapsed=true;

    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    // $scope.watches = CartService.getCart();
    // For some reason, when I did this CartService functionality on the MainNavCtrl, certain css files
    // werent being loaded on index.ejs and the drop down cart wasnt working. Moving on for now...
    // $scope.total = function() {
    //     var total = 0;
    //     angular.forEach($scope.watches, function(item){
    //         total += item.price;
    //     });
    //     return total;
    // }

    $scope.isActive = function(url){
        return url == $location.path();
    };

    $scope.search = function(){
        $location.path('/');
        $location.search('q',$scope.searchTerm);
        //alert('search term: '+$scope.searchTerm);
    };

    $scope.showLogin = function(){
        $modal.open({
            templateUrl:'/views/authModal.html',
            controller:'AuthModalCtrl'
        })
    };

    $scope.showSignup = function(){
        $modal.open({
            templateUrl:'/views/authModal.html',
            controller:'AuthModalCtrl'
        })
    };

    $scope.logout = function(){
        UserService.logout(function(err,data){

        });
    }

}]);
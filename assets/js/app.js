var watchApp = angular.module('WatchApp',['ui.bootstrap','ngRoute']);

watchApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    //no more #!
    $locationProvider.html5Mode(true);

    //define routes
    $routeProvider
    .when('/',{
        templateUrl:'/views/home.html',
        controller:'HomeCtrl'
    })
    .when('/watch/new',{
        templateUrl:'/views/watch/new.html',
        controller:'WatchNewCtrl'
    })
    .when('/watch/:id',{
        templateUrl:'/views/watch/show.html',
        controller:'WatchShowCtrl'
    })
    .when('/about',{
        templateUrl:'/views/about.html',
        controller:'StaticCtrl'
    })


}]);

watchApp.run(['UserService',function(UserService){

    UserService.check(function(err,data){
        console.log('check',err,data);
    });

}]);
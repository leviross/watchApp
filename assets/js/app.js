var watchApp = angular.module('WatchApp',['ui.bootstrap','ngRoute','ngCart']);

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
    .when('/cart',{
        templateUrl:'/views/cart/cart.html',
        controller:'WatchCartCtrl'
    })
    .when('/cart/checkout',{
        templateUrl:'/views/cart/checkout.html',
        controller:'WatchCheckoutCtrl'
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

    //IF THERE IS A USER LOGGED IN, AND THAT USER HAS A CART WITH A MIN LENGTH OF 1, THEN userCart ARRAY
    // IS HIS SAVED ARRAY FROM BEFORE, ELSE- userCart IS A NEW EMPTY ARRAY

}]);







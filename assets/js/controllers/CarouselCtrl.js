watchApp.controller('CarouselCtrl',['$scope',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {image:'/images/luxury4.jpg'},
    {image:'/images/luxury2.JPG'},
    {image:'/images/luxury3.jpg'}
  ];

}]);
watchApp.controller('CarouselCtrl',['$scope',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {image:'/images/luxury4.jpg',text:'Best Selection of Luxury Watches'},
    {image:'/images/luxury1.jpg',text:'Our Watches are 100% Authentic'},
    {image:'/images/breit4.jpg',text:'Join Clock Swap'}
  ];

}]);
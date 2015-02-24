watchApp.controller('CarouselCtrl',['$scope',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {image:'/images/luxury4.jpg',text:'item 1'},
    {image:'/images/luxury2.JPG',text:'item 2'},
    {image:'/images/luxury3.jpg',text:'item 3'}
  ];

}]);
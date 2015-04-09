watchApp.controller('TestCtrl', ['$scope', function($scope){

    $scope.MyFloat = "left";
    $scope.levi = {name: "Levi Ross"};

    $scope.swapSide = function(){
        alert("this ");
        if($scope.MyFloat == "left"){
            $scope.MyFloat == "right";
        }else{
            $scope.MyFloat == "left";
        }
    }

    $scope.rows = [
  {
    "sequence": ["red", "green", "yellow", "blue"],
    "states": {
      "red": "A",
      "green": "A",
      "yellow": "A",
      "blue": "A"
    }
  },
  {
    "sequence": ["green", "yellow", "red", "blue"],
    "states": {
      "red": "B",
      "green": "B",
      "yellow": "A",
      "blue": "A"
    }
  },
  {
    "sequence": ["blue", "yellow", "red", "green"],
    "states": {
      "red": "A",
      "green": "A",
      "yellow": "B",
      "blue": "B"
    }
  },
  {
    "sequence": ["yellow", "blue", "green", "red"],
    "states": {
      "red": "A",
      "green": "B",
      "yellow": "A",
      "blue": "B"
    }
  }
]


}])

.directive('MyFloat', function(){
    return {
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        }

    };

});







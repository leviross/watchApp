watchApp.controller('TestCtrl', ['$scope', function($scope){


    $scope.swapSide = function(){
        $scope.state = !$scope.state;
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

//WAS REALLY TRYING TO HAVE A TEMPLATE PRODUCE A <td> TAG FOR EVERY COLOR AND THEN CHANGE THE CSS FLOAT PROPERTY BASED ON WHAT COLUMN THE DIV WAS IN AND TOGGLE BACK AND FORTH AND KEEP SEQUENCE...

.directive('MyFloat', function(){
    return {
        restrict: 'E',
        scope: {
            state: '=?'
        },
        replace: true,
        template: '<td>' + '<div ng-repeat="color in row.sequence" style="width:100px; height:50px; background-color:{{color}}; float:{{state}};" ng-click="swapSide()"></div>' + '</td>'
    };

});







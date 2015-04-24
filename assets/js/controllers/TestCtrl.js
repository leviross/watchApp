watchApp.controller('TestCtrl', ['$scope','$http', function($scope,$http){


    $scope.swapSide = function(){
        $scope.state = !$scope.state;
    }

    $scope.countA = 0;
    $scope.countB = 0;

    $scope.startGame = function(){
        alert('worked');

        $http.get('/api/color').success(function(data){
            console.log("JSON DATA: ", data);
            $scope.colors = data;
            if(data.length > 0){
                for(var i = 0; i < data.length; i++){
                    //console.log(i.states);
                    var column = data[i].states;
                    for(var key in column){
                        if(column[key] == "A"){
                            $scope.countA++;
                        }
                        if(column[key] == "B"){
                            $scope.countB++;
                        }
                    }
                }
            }

        });

    }




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







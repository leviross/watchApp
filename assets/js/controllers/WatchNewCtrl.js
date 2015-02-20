watchApp.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);


watchApp.controller('WatchNewCtrl',['$scope','$http','$location',function($scope,$http,$location){
    $scope.createWatch = function(){
        $scope.alert=false;

        var watchData = {
            modelNum:$scope.modelNum,
            name:$scope.name,
            brand:$scope.brand,
            price:$scope.price,
            used:$scope.used,
            image_file1:$scope.image_file1,
            image_file2:$scope.image_file2,
            image_file3:$scope.image_file3
        };

        console.log(watchData);

        $http.post('/watch/new',watchData).success(function(data){
            //$scope.alert="Your post has been created.";
            alert("Your watch has been created.");
            console.log(data);
            $location.path('/watch/'+data.id);
        }).error(function(err){
            console.log(err);
            alert(err);
        })
    }


}]);
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


watchApp.controller('WatchNewCtrl',['$scope','$http','$location','UserService',function($scope,$http,$location,UserService){

    $scope.loading = false;
    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    $scope.createWatch = function(){
        $scope.loading = true;
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

        //console.log(watchData);

        $http.post('/watch/new',watchData).success(function(data){
            //$scope.alert="Your post has been created.";
            swal({
                title: "Your watch has been added!",
                text: "Here is what your watch page looks like",
                type: "success",
                timer: 2500
              });
            console.log(data);
            $scope.loading = false;
            $location.path('/watch/'+data.id);
        }).error(function(err){
            console.log(err);
            alert(err);
        })
    }


}]);
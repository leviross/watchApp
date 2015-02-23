watchApp.factory('UserService',['$http',function($http){

    return {
        login: function(email,password,callback){
            var self = this;
            var loginData={email:email,password:password};
            $http.post('/api/auth',loginData)
            .success(function(data){
                if(data && data.user){
                    self.currentUser=data.user;
                }else{
                    self.currentUser=false;
                }
                callback(null,data);
            }).error(function(err){
                callback(err);
            })
        },
        logout: function(callback){
            var self=this;
            $http.delete('/api/auth')
            .success(function(data){
                self.currentUser=false;
                swal({
                    title: "Sorry to see you go.",
                    text: "We hope you had fun, see you soon.",
                    type: "warning",
                    timer: 3000
                  });
                callback(null,data);
            }).error(function(err){
                callback(err);
            })
        },
        check: function(callback){
            var self=this;
            $http.get('/api/auth')
            .success(function(data){
                if(data && data.user){
                    //console.log("UserService check function returns: ",data.user);
                    self.currentUser=data.user;
                }else{
                    self.currentUser=false;
                }
                callback(null,data);
            }).error(function(err){
                callback(err);
            })
        }

    }
}])
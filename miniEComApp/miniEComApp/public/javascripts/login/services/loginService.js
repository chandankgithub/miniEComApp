loginModule.factory('loginService', function($http){
    var validateUser = function(loginModel, successCallback, failureCallback){
        $http.post('/login/postdata').then(function(result){
            successCallback(result);
        }, function(error){
            failureCallback(error);
        });
    }
})
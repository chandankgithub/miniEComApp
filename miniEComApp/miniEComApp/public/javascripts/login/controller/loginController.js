var loginController = function($scope, loginService){

    $scope.login={
        username:'',
        password:''
    };

    $scope.validateUser = function(){
        debugger;
        loginService.validateUser($scope.login, loginSuccessCallback, loginFailureCallback);
    }

    var loginSuccessCallback= function(result){
        $window.href='/Categories'
    }

    var loginFailureCallback = function(error){
        console.log(error);
    }

}

loginController.$inject = ['$scope', 'loginService'];
loginModule.controller('loginController', loginController);
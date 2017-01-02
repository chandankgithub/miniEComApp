var productModule = angular.module('productModule' ,[])
var productCategoryController = function($scope,$http){
    $scope.new  = {
       productCategory:{
           Name:'',
           Description:''
       }
    };

    $scope.addProductCategory = function(){
        $http.post('/Categories/Add/PostData', $scope.new.productCategory).then(addSuccessCallback,addFailureCallback);
        $scope.new.productCategory={};
    }
    
    var addSuccessCallback = function(result){
       $scope.productCategories.push(result.data);
       $http.get('/Categories')
    }

    var addFailureCallback = function(error){
        console.log(error);
    }
};

 var productCategoryListingController = function($scope, $http){
    $scope.productCategories=[];
    // $scope.productCategories.push(
    //     { Name: 'My Category', Description:'My Description'}
    //     );
     };

var productListingController = function($scope, $http){
    // $scope.products = [{
    //     Name:'Chandan Kumar',
    //     Description: 'My Description'
    // }]

}

//Dependency Injection to Controller
productCategoryController.$inject = ['$scope','$http'];
productCategoryListingController.$inject = ['$scope','$http'];
productListingController.$inject = ['$scope','$http'];

//Controller declarations
productModule.controller('productCategoryController', productCategoryController)
             .controller('productCategoryListingController', productCategoryListingController)
             .controller('productListingController', productListingController);
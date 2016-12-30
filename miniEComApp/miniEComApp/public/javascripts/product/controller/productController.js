angular.module('productModule' ,[])
.controller('productController', ['$scope','$http', function($scope, $http){
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
}])
.controller('productCategoryListingController', ['$scope','$http', function($scope, $http){
    $scope.productCategories=[];
    // $scope.productCategories.push(
    //     { Name: 'My Category', Description:'My Description'}
    //     );
     }])
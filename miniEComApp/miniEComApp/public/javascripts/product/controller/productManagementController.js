var productModule = angular.module('productModule' ,[]);

var productCategoryController = function($scope,$http, productService){
    $scope.new  = {
       productCategory:{
           name:'',
           description:''
       }
    };
    var init =function (){
        
    }
    $scope.addProductCategory = function(){
        productService.addProductCategory($scope.new.productCategory, addSuccessCallback,addFailureCallback);
        //$http.post('/Categories/Add/PostData', $scope.new.productCategory).then(addSuccessCallback,addFailureCallback);
        $scope.new.productCategory={};
    }
    
    var addSuccessCallback = function(result){
       //$scope.productCategories.push(result.data);
       window.location = '/Categories';
    }

    var addFailureCallback = function(error){
        console.log(error);
    }
};

 var productCategoryListingController = function($scope, $http, productService){
     var productCategories = productService.getProductCategoryMeta();
    $scope.productCategories=productService.productCategories;
       
}

var productCategoryGridController = function($scope, $http, productService){
    var productCategories = productService.getProductCategoryData(function(categories){
        $scope.productCategories = categories;
    });
}


var productController = function($scope, $http, productService){
    
    var self = this;

    $scope.new={
        product:{
            name:'',
            description:''
        }
    }
    $scope.addNewProduct = function(){
        productService.addNewProduct($scope.new.product, self.addSuccessCallback, self.addFailureCallback)
    }
    self.addSuccessCallback = function(result){
        window.location = '/Products';
    }

    self.addFailureCallback = function(error){
        console.log(error);
    }
}
var productListingController = function($scope, $http){

}



//Dependency Injection to Controller
productCategoryController.$inject = ['$scope','$http','productService'];
productCategoryListingController.$inject = ['$scope','$http','productService'];
productCategoryGridController.$inject = ['$scope','$http','productService'];

productController.$inject = ['$scope','$http', 'productService'];
productListingController.$inject = ['$scope','$http'];

//Controller declarations
productModule.controller('productCategoryController', productCategoryController)
             .controller('productCategoryListingController', productCategoryListingController)
             .controller('productCategoryGridController', productCategoryGridController)
             .controller('productController', productController)
             .controller('productListingController', productListingController);
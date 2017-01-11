productModule.factory('productService', ['$http',function($http) {

    var productCategories =[];
    return {
       productCategories: productCategories,

       getProductCategoryMeta: function(){
           $http.get('/Categories').then(function(result){
               
           }).catch(function(error){
                console.log(error);
           });
       },

       getProductCategoryData: function(callback){
           $http.get('/CategoryList').then(function(result){
               callback(result.data.productCategories);
           }).catch(function(error){
                console.log(error);
           });
       },

       addProductCategory: function (productCategory, successCallback, failureCallback){
           $http.post('/Categories/Add/PostData', productCategory).then( function(result){
               successCallback(result.data);
           }, function(error){
                failureCallback(error);
           });
       },

       addNewProduct: function(newProduct, successCallback, failureCallback){
            $http.post('/Products/Edit/PostData', newProduct).then( function(result) {
                successCallback(result);
            }, function(error) {
                console.log(error);
            });
       },

       getProductList: function(successCallback, failureCallback){
           $http.get('/Product/ListAll').then(function(result){
               debugger;
               successCallback(result.data.productList);
           },
           function(error){
               failureCallback(error);
           })
       }
    };
}])


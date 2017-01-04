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
       }
    };
}])


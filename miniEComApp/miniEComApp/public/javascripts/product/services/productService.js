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

       getProductCategoryData: function(){
           $http.get('/CategoryList').then(function(result){
               debugger;
               console.log(result.data);
           }).catch(function(error){
                console.log(error);
           });
       },

       addProductCategory: function (productCategory){
           productCategories.push(productCategory);
       }
    };
}])


productModule.factory('productService', ['$http',function($http) {

    var productCategories =[];
    return {
       productCategories: productCategories,

       getProductCategories: function(){
           $http.get('/Categories').then(function(result){
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


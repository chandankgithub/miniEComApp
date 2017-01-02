productModule.factory('productService', [function() {

    var productCategories =[];
    return {
       productCategories: productCategories,
       addProductCategory: function (productCategory){
           productCategories.push(productCategory);
       }
    };
}])


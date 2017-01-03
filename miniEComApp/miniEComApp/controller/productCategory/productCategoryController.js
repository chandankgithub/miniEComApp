var productCategoryService = require('../../services/productCategoryService.js');

const productModuleRootPath = "admin/product/"
module.exports={

    getCategories:function(request, response){
        var productCategories = productCategoryService.getCategories();
        console.log(productCategories);
        response.render(productModuleRootPath + 'productCategoryListing', {productCategories: productCategories});
    }
}
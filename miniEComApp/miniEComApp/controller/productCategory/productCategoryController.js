var productCategoryService = require('../../services/productCategoryService.js');

const productModuleRootPath = "admin/product/"
module.exports={

    getCategories:function(request, response){
        
        response.render(productModuleRootPath + 'productCategoryListing', {title:'Product Categories'});
    },

    getCategoryList: function(request, response){
        var prodCategories = productCategoryService.getCategories();
        console.log(prodCategories);
        //response.json(prodCategories);
        //response.setHeader('Content-Type', 'application/json');
        response.json({prodCategories: prodCategories}); 
        
    }
}
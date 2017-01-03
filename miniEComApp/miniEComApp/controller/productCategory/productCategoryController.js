var productCategoryService = require('../../services/productCategoryService.js');

const productModuleRootPath = "admin/product/";


module.exports={

    getCategories:function(request, response){
        
        response.render(productModuleRootPath + 'productCategoryListing', {title:'Product Categories'});
    },

    getCategoryList: function(request, response){
        productCategoryService.getCategories(function(recordset){
            response.json({productCategories: recordset});
        });
    }
}


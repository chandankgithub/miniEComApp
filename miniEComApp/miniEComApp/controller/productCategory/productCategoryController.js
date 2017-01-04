var productCategoryService = require('../../services/product/productCategoryService.js');

const productModuleRootPath = "admin/product/";


module.exports={

    getCategories:function(request, response){
        
        response.render(productModuleRootPath + 'productCategoryListing', {title:'Product Categories'});
    },

    getCategoryList: function(request, response){
        productCategoryService.getCategories(function(recordset){
            response.json({productCategories: recordset});
        });
    },
    addProductCategory: function(request,response){
        var prodcutCategoryModel = request.body;
        productCategoryService.addProductCategory(prodcutCategoryModel, function(){
            response.json({Status: 'OK'});
        })
    }
}


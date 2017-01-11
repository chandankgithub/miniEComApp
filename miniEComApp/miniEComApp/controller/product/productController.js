var productService = require('../../services/product/productService.js').productService;

const productModuleRootPath = "admin/product/";

var productController = {
    getProductListData: function(request,response){
        productService.getProductListData(function(recordsets){
            response.json({productList: recordsets});
        })
    },
    
    getProductListView: function(request,response){
        response.render(productModuleRootPath + 'productListing', {'title': 'Products'});
    },

    getProductEditView : function(request, response){
        response.render(productModuleRootPath + 'productEdit', {'title': 'Product Add-Edit'});
    },

    addNewProduct: function(request, response){
        var productModel = request.body;
        productService.addNewProduct(productModel, function(result){
            response.json({Status: 'OK'});
        });
    }
}
module.exports.productController = productController;
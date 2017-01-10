var productService = require('../../services/product/productService.js').productService;

var productController = {
    getProductListView: function(request,response){
        response.render('productListing', {'title': 'Products'});
    },
    addNewProduct: function(request, response){
        var productModel = request.body;
        productService.addNewProduct(productModel, function(result){
            response.json({Status: 'OK'});
        });
    }
}
module.exports.productController = productController;
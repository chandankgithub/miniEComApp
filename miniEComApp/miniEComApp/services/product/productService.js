var productRepository = require('../../dal/product/productRepository.js');
var productService= {
    addNewProduct: function(productModel, successCallback){
        productRepository.addNewProduct(productModel, successCallback);
    }
}

module.exports.productService = productService;
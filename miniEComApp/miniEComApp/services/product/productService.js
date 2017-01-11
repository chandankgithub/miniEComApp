var productRepository = require('../../dal/product/productRepository.js');
var productService= {
    getProductListData : function(successCallback, failureCallback){
        productRepository.getProductListData(successCallback);
    },

    addNewProduct: function(productModel, successCallback){
        productRepository.addNewProduct(productModel, successCallback);
    }
}

module.exports.productService = productService;
var productRepo = require('../../dal/product/productRepository.js');

module.exports = {

    getCategories: function(successCallback){
        productRepo.getProductCategories(successCallback);
    }
}
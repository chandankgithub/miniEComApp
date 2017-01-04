var productRepo = require('../../dal/product/productRepository.js');

module.exports = {

    getCategories: function(productCategoryModel, successCallback){
        productRepo.getProductCategories(productCategoryModel,successCallback);
    }
}
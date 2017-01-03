var productRepo = require('../dal/productRepository.js');

module.exports = {

    getCategories: function(successCallback){
        productRepo.getProductCategories(successCallback);
    }
}
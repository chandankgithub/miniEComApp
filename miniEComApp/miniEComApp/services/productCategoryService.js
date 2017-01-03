var productRepo = require('../dal/productRepository.js');

module.exports = {

    getCategories: function(){
        productRepo.getProductCategories();
    }
}
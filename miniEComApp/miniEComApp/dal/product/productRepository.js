var sql = require('mssql');
var connectionProvider = require('../connectionProvider.js').connectionProvider;
var path = require('path');
var constants = require(path.join(path.resolve(__dirname),'../../utility/constants/constants.js'));

var sqlInputParams=[];
var param = {
    parameterName:'',
    dataType:'',
    dataValue:''
}
module.exports = {

    getProductCategories: function (successCallback) {
        connectionProvider.executeQuery('SELECT * FROM [ProductCategories]', null, successCallback, null);
    },
    addProductCategory: function(productCategoryModel, successCallback){
        sqlInputParams =[];

        sqlInputParams.push({ parameterName:'name', dataType: sql.VarChar(100), dataValue: productCategoryModel.name});
        sqlInputParams.push({ parameterName:'description', dataType: sql.VarChar(250), dataValue: productCategoryModel.description});
        
         connectionProvider.executeProcedure(constants.storedProcedure.productCategory.ADD_PRODUCT_CATEGORY, sqlInputParams,null,successCallback,null);
    }
}

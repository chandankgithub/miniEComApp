var sql = require('mssql');
var connectionProvider = require('../connectionProvider.js').connectionProvider;

var sqlInputParams=[];
var param = {
    parameterName:'',
    dataType:'',
    dataValue:''
}
module.exports = {

    getProductCategories: function (successCallback) {
        // param.parameterName='id';
        // param.dataType=sql.Int,
        // param.dataValue=5;
        // sqlInputParams.push(param);
        // connectionProvider.executeProcedure('[dbo].[usp_getCategories]', sqlInputParams,null,successCallback,null);
        connectionProvider.executeQuery('SELECT * FROM [ProductCategories]', null, successCallback, null);
    },
    addProductCategory: function(productCategoryModel, successCallback){
        param.parameterName='name';
        param.dataType=sql.VarChar(100),
        param.dataValue=5;
        sqlInputParams.push(param);
        connectionProvider.executeProcedure('[dbo].[usp_getCategories]', sqlInputParams,null,successCallback,null);
    }
}

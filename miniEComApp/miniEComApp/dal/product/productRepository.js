var sql = require('mssql');
var connectionProvider = require('../connectionProvider.js');

module.exports = {

    getProductCategories: function (successCallback) {
        connectionProvider.connectionProvider.executeQuery('SELECT * FROM [ProductCategories]', null, successCallback, null);
    }
}

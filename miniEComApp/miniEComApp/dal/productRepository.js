var sql = require('mssql');
// var dbConfig ={
//     server: 'localhost\\SQL2012',
//     database:'miniEcom',
//     user:'sa',
//     password: 'sa'
// };

module.exports = {
    
    getProductCategories : function (successCallback) {
        var dbConfig ={
            //server: 'localhost\\SQL2012',
            server: 'DESKTOP-HVMR0J1\\SQLEXPRESS',
            database:'miniEcom',
            user:'sa',
            password: 'sa',
            port:1433
        };
            var connection = new sql.Connection(dbConfig);
            connection.connect().then(function () {
                var request = new sql.Request(connection);
                request.query('SELECT * FROM [ProductCategories]').then(function (recordset) {
                    
                    connection.close();
                    successCallback(recordset);
                })
                    .catch(function (err) {
                        console.log(err);
                        connection.close();
                    })
            }).catch(function (err) {
                console.log(err);
            });
        }
}

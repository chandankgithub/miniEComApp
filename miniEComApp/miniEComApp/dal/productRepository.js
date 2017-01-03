var sql = require('mssql');
// var dbConfig ={
//     server: 'localhost\\SQL2012',
//     database:'miniEcom',
//     user:'sa',
//     password: 'sa'
// };

module.exports = {
    
    getProductCategories : function () {
        var dbConfig ={
            server: 'localhost\\SQL2012',
            database:'miniEcom',
            user:'sa',
            password: 'sa',
            port:1433
        };
            var connection = new sql.Connection(dbConfig);
            connection.connect().then(function () {
                var request = new sql.Request(connection);
                request.query('SELECT * FROM [ProductCategories]').then(function (recordset) {
                    console.log(recordset);
                    connection.close();
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

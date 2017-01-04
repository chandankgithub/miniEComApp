var sql = require('mssql');
var path =require('path');
var connectionConfig = require(path.resolve(__dirname + '/connectionConfig.js'));

var connection;

var connectionProvider =  {
    
    getConnection : function () {
        var connection = new sql.Connection(connectionConfig.connectionString.dev);
        return connection;
    },

    closeConnection : function () {
        if (connection) {
            connection.close();
        }
    },

    executeQuery : function (sqlQuery, sqlParams, successCallback, failureCallback) {
        var self = this;
        if (connection === undefined || (connection && !connection.connected) ) {
            connection = self.getConnection();
        }
        connection.connect()
                    .then(function () {
                        var request = new sql.Request(connection);
                        request.query(sqlQuery).then(function (recordset) {
                            self.closeConnection();
                            if (successCallback) {
                                successCallback(recordset);
                            }
                        })
                    .catch(function (err) {
                        console.log(err);
                        self.closeConnection();
                    })
            }).catch(function (err) {
                console.log(err);
            });
    }
};

module.exports.connectionProvider = connectionProvider;
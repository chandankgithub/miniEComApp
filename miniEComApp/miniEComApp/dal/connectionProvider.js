var sql = require('mssql');
var path = require('path');
var constants = require('./utility/constants/constants.js')
var connectionConfig = require(path.resolve(__dirname + '/connectionConfig.js'));

console.log(constants);
var connection;

var connectionProvider = {

    getConnection: function () {

        if (connection === undefined || (connection && !connection.connected)) {
            connection = new sql.Connection(connectionConfig.connectionString.dev);
        }
        return connection;
    },

    closeConnection: function () {
        if (connection) {
            connection.close();
        }
    },

    executeQuery: function (sqlQuery, sqlParams, successCallback, failureCallback) {
        var self = this;

        connection = self.getConnection();
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
    },
    executeProcedure: function (spName, sqlInputParams, sqlOutputParams, successCallback, failureCallback) {
        //     new sql.Request();
        // .input('input_parameter', sql.Int, value);
        // .output('output_parameter', sql.VarChar(50));
        // .execute('procedure_name').then(function(recordsets) {
        //     console.dir(recordsets);
        // }).catch(function(err) {
        //     // ... error checks 
        // });
        var self = this;
        connection = self.getConnection();
        connection.connect()
            .then(function () {
                var request = new sql.Request(connection);
                
                // sqlInputParams.forEach(function(param){
                //         request.input(param.parameterName, param.dataType, param.dataValue);
                // });

                // sqlOutputParams.forEach(function(param){
                //         request.output(param.parameterName, param.dataType);
                // });

                request.execute(spName).then(function (recordset) {
                   self.closeConnection();
                    if (successCallback) {
                        successCallback(recordset);
                    }
                }).catch(function (err) {
                    console.log(err);
                    self.closeConnection();
                })

            }).catch(function (err) {
                console.log(err);
            });
    }
};


module.exports.connectionProvider = connectionProvider;
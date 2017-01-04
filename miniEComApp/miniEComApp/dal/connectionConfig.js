

var connectionString = {
    dev: {
        server: 'localhost\\SQL2012',
        database: 'miniEcom',
        user: 'sa',
        password: 'sa',
        port: 1433

    },
    
    home: {
            server: 'DESKTOP-HVMR0J1\\SQLEXPRESS',
            database: 'miniEcom',
            user: 'sa',
            password: 'sa',
            port: 1433

        }
}

module.exports.connectionString = connectionString;
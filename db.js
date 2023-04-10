const mariadb = require("mariadb"),
    pool = mariadb.createPool({
        host: "localhost",
        user: "admin_license_server",
        password: "admin123",
        database: "licenses_db",
        connectionLimit: 20,
        connectionTimeout: 1e4
    });
module.exports = {
    getConnection: () => pool.getConnection()
};
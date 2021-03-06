async function connect() {
    //confirma se esta conectado com a variavel global
    if (global.connection && global.connection.state != 'disconnected') {
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
        "mysql://root:root@localhost:3306/cadastro");
    console.log("conectou no MySQL");
    global.connection = connection;
    return connection;
}

module.exports = { connect };
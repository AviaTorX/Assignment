const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "momos2^8",
    host: "postgres",
    port: 5432,
    database: "momos"
});

module.exports = pool;
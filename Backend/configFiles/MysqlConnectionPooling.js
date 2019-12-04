// const mysql = require('mysql');

// var pool = mysql.createPool({
//     connectionLimit: 100,
//     host: 'twitter.cyhp17rgvbzt.us-west-1.rds.amazonaws.com',
//     user: 'rajesh1234',
//     password: 'rajeshs1234',
//     database: 'twitter'
// });

// module.exports = pool;


const mysql = require('mysql')

const mySqlPool = mysql.createPool({
    host: 'twitter.cyhp17rgvbzt.us-west-1.rds.amazonaws.com',
    port: 3306,
    user: 'rajesh1234',
    password: 'rajesh1234',
    database: 'twitter',
    multipleStatements: true
})
// pool.connect(function (err) {
//     if (err) {
//         console.log(`Error Occured ${err.message}`)
//     }
// })

module.exports = mySqlPool;
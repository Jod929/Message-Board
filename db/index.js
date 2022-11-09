const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'booklog'
})


connection.connect((err, res) => {
    if(err) {
      console.log(err);
    } else {
      console.log('connected to db at: ', res.connectionId)
    }
})

module.exports = {
  connection,
  select: function() {
    return new Promise((resolve, reject) => {
      connection.query('select * from users', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
    })
  }
}

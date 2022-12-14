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

  selectAllUsers: function() {
    return new Promise((resolve, reject) => {
      connection.query('select * from users', (err, res) => {
        if (err) {
          reject(err);
        }
          resolve(res);
      })
    })
  },
  selectAllMessages: function() {
    return new Promise((resolve, reject) => {
      let queryStr = `select * from messages inner join users on users.id = messages.id_user`

      connection.query(queryStr, (err, res) => {
        if (err) {
          reject(err);
        }
          resolve(res);
      })
    })
  },
  addUser: function(username, password) {
    return new Promise((resolve, reject) => {
      let queryStr = `insert into users (name, password) VALUES ('${username}', '${password}')`
      connection.query(queryStr, (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results)
        }
      })
    })
  },
  verifyUser: function(username, password) {
    let queryStr = `Select * from users where name = '${username}' AND password = '${password}'`;

    return new Promise((resolve, reject) => {
      connection.query(queryStr, (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results);
        }
      })

    })
  },
  addMessage: function(username, message) {
    let queryStr = `insert into messages (message, id_user) select '${message}', id from users where name = '${username}'`

    return new Promise((resolve, reject) => {
      connection.query(queryStr, (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results);
        }
      })
    })
  },
  deleteMessage(username, message) {
    let queryStr = `delete from messages where message = '${message}' limit 1`;

    return new Promise((resolve, reject) => {
      connection.query(queryStr, (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results);
        }
      })
    })
  },
  editMessage(username, oldMessage, newMessage) {
    let queryStr = `update messages set message = '${newMessage}' where message = '${oldMessage}'`;

    return new Promise((resolve, reject) => {
      connection.query(queryStr, (err, results) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(results);
        }
      })
    })



  }
}

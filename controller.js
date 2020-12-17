const mysql = require('./connection');

function login(req, res) {
  console.log({ req });
  
  const { username, password } = req.body;
  
  mysql.query(`SELECT * FROM users WHERE username=${username}`, (err, result) => {
    if (err) return console.log({ err });
    
    console.log({ result });
    
    let user = result.pop();

    if (user.user_password !== password) return res.status(401).json({
      success: false,
      message: 'Nombre de usuario o contraseña incorrectos.'
    });

    res.json({ success: true, user });
  });
  
  // res.send({testing: true});
}

function createUser(req, res) {
  res.send({ created: true });
}

module.exports = {
  login,
  createUser
}


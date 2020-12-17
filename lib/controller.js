const mysql = require('./connection');

function login(req, res) {  
  const { username, password } = req.body;
  
  mysql.query(`SELECT * FROM users WHERE username=${username}`, (err, result) => {
    if (err) return res.status(500).json({ 
      success: false, 
      message: 'Error de login',
      error: err
    });

    if (!result.length) res.staus(404).json({
      success: false,
      message: 'Cuenta no existente'
    })
    
    let user = result.pop();

    if (user.user_password !== password) return res.status(401).json({
      success: false,
      message: 'Nombre de usuario o contraseña incorrectos.'
    });

    res.json({ success: true, user });
  });
}

function createUser(req, res) {
  const { nombre, username, password } = req.body;

  mysql.query(`INSERT INTO users (nombre, username, user_password) values('${nombre}', '${username}', '${password}')`, (err, result) => {
    if (err) return res.status(500).json({
      success: false,
      message: 'Unexpected error',
      error: err
    });    

    res.json({ success: true });
  });
}

module.exports = {
  login,
  createUser
}


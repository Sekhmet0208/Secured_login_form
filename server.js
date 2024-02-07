const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./database');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

  db.run(sql, [username, email, hashedPassword], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT * FROM users WHERE username = ?`;
  db.get(sql, [username], async (err, user) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ message: "Connexion réussie" });
      } else {
        res.status(400).json({ error: "Mot de passe incorrect" });
      }
    } else {
      res.status(400).json({ error: "Utilisateur non trouvé" });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

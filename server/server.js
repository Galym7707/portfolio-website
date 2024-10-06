// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5000;

// Подключаемся к базе данных SQLite
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('Подключено к базе данных SQLite.');
  }
});

// Создаем таблицу пользователей, если её нет
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  email TEXT,
  password TEXT
)`);

// Настройка парсинга JSON данных
app.use(bodyParser.json());

// Маршрут для регистрации пользователя
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, password], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Ошибка при регистрации пользователя.' });
    }
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован!' });
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

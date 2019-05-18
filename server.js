const express = require('express');
const app = express();
const mysqlConn = require('./mysqlConn');
const cors = require('cors');
const PORT = 3000;

app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.send("OK");
});

app.get('/', (req, res) => {
  const query = "SELECT * FROM users WHERE user_id = 1";
  mysqlConn.query(query, (err, result) => {
    if(err) return res.status(500).send({'Failed to Fetch Data.': err, 'env': process.env.MYSQL_HOST});
    res.json(result);
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
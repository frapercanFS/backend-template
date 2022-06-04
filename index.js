const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/prueba', function(req, res) {
    var post_body = req.body;
    res.send(post_body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
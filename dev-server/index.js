const express = require('express');

const app = express();
const port = 5000;

app.post('/api/authenticate', (req, res) => res.send({ token: "brooke:123123123:789851269" }))

app.get('/api/post/create', (req, res) => { res.send({}) });

app.get('/api/post/:id', (req, res) => {
	console.log(req.params);
	res.send({ result: true });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
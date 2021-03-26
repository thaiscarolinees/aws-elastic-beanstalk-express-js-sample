const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi Amazon!!! Its my 3th deploy'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

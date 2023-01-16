const express = require('express');
const port = 3000;
const server = express();

server.get('/', (req, res) => {
    res.send('Hello from express server');
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})
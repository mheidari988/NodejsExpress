const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = 3000;
const server = express();

server.use(express.static(path.join(__dirname, '/public')));
server.use(morgan('tiny'));

server.get('/', (req, res) => {
    res.send('Hello from express server');
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
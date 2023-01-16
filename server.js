const express = require('express');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static(path.join(__dirname, '/public')));
server.use(morgan('tiny'));

server.set('views', './src/views');
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        title: 'globomantics',
        data: [
            'First data',
            'Second data',
            'Third data'
        ]
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
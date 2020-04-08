const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.send('Testing nodemon');
});

app.listen(3333);

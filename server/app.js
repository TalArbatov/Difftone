const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 


app.use(require('./routes') )

app.use('/', express.static(path.join(__dirname, '../', 'client', 'build')))



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
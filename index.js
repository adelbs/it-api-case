
const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Api-Key,Authorization,X-CM-App,path-dest');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1/categoria', require('./backend/routes/categorias'));
app.use('/api/v1/lancamento', require('./backend/routes/lancamento'));

app.use(express.static(path.join(__dirname, 'www')));

let server = http.createServer(app);
server.listen(3200, () => console.log(`Aplicação no ar!`));

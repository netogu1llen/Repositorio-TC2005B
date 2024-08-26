const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/menu', require('./routes/menu'));
app.use('/contacto', require('./routes/contacto'));
app.use('/preparar', require('./routes/preparar'));
app.use('/chocolate', require('./routes/chocolate'));

app.listen(3000);

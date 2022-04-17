require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.use('/user', require('./routes/userRoute'));
app.use('/post', require('./routes/postRoute'));
app.use('/categories', require('./routes/categoriesRoute'));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

require('dotenv').config();
const express = require('express');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const loginRoute = require('./routes/loginRoute');
const handleError = require('./middleware/handleErrors');

const app = express();
app.use(express.json());

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/categories', categoriesRoute);
app.use('/login', loginRoute);
app.use(handleError);
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

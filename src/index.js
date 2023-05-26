const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
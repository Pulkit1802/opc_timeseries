const app = require('./app');
const { port } = require('./config');

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
const app = require('./app');
const { port } = require('./loadenv');

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
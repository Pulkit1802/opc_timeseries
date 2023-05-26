const Express = require("express");
const { router } = require("./routes");

const app = Express();

app.use(Express.json());
app.use('/api/v1', router);

module.exports = app;
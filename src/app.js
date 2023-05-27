const Express = require("express");
const {dashboardRouter} = require("./routes/dashboardRoutes");

const app = Express();

app.use(Express.json());
app.use('/api/v1/dashboard', dashboardRouter);

module.exports = app;
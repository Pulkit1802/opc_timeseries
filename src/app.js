const Express = require("express");
const {dashboardRouter} = require("./routes/dashboardRoutes");
const {opcVarRouter} = require("./routes/opcVarRoutes");

const app = Express();

app.use(Express.json());

app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/opcVar', opcVarRouter);

module.exports = app;
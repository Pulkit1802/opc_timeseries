const Express = require("express");
const cors = require("cors");

const {dashboardRouter} = require("./routes/dashboardRoutes");
const {opcVarRouter} = require("./routes/opcVarRoutes");

const app = Express();

app.use(Express.json());

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/opcVar', opcVarRouter);

module.exports = app;
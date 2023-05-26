const Express = require("express");
const { get2dController } = require("./controller/dashboardController");

const router = Express.Router();

router
.route("/dashboard")
.get(get2dController);

module.exports = {
    router
};
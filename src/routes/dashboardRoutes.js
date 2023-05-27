const Express = require("express");
const { get2dController } = require("../controller/dashboardController");

const router = Express.Router();

router
.route("/")
.get(get2dController);

module.exports = {
    dashboradRouter: router
};
const Express = require("express");
const { fetch2DaysData } = require("./requestHandler");

const router = Express.Router();

router.route("/getData").get(fetch2DaysData);

module.exports = {
    router
};
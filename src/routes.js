const Express = require("express");
const { fetch2DaysData } = require("./requestHandler");

const router = Express.Router();

// console.log(fetch2DaysData)

router.route("/getData").get(fetch2DaysData);

module.exports = {
    router
};
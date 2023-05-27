const Express = require("express");
const { createOne, getAll, deleteOne } = require("../controller/opcVarController");

const router = Express.Router();

router.route("/")
.get(getAll)
.post(createOne);

router.route("/:id")
.delete(deleteOne);

exports.opcVarRouter = router;
const Express = require("express");
const { createOne, getAll, deleteOne, updateOne } = require("../controller/opcVarController");

const router = Express.Router();

router.route("/")
.get(getAll)
.post(createOne);

router.route("/:id")
.delete(deleteOne)
.put(updateOne);

exports.opcVarRouter = router;
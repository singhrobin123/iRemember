const router = require("express").Router();
const userRouter = require("./modules/users/users.route");

router.use("/auth",userRouter);
module.exports = router;
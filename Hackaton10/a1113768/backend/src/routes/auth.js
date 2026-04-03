const Router = require("express");
const {
  authLogin,
  authLogout,
  updatePassword,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router.post("/login", authLogin);
router.post("/updatePass",authMiddleware, updatePassword);
router.post("/logout", authLogout);

module.exports = router;

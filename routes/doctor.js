const express = require("express");
const router = express.Router();
const {Authenticate} = require("../middleware/authMiddleware");

const {
   registerDoctor,
   loginDoctor,
   profileDoctor,
} = require("../controller/doctorController");

// const { verifyToken } = require("../middleware/authMiddleware");
router.post("/register", registerDoctor);

router.post("/login", loginDoctor);

router.use(Authenticate);

router.get("/profile", profileDoctor);

module.exports = router;

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const Doctor = require("../models/doctor");

const Authenticate = asyncHandler(async (req, res, next) => {
   let token;

   if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
   ) {
      try {
         // Get token from header
         token = req.headers.authorization.split(" ")[1];

         // Verify token
         const decoded = jwt.verify(token, process.env.JWT_SECRET);

         // Get user from the token
         req.user = await Doctor.findById(decoded.id).select("-password");
         // console.log("user aya hai ye mere pss =>",req.user);
         next();
      } catch (error) {
         console.log(error);
         res.status(401);
         throw new Error("Not authorized");
      }
   }

   if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
   }
});

const verifyToken = (req, res, next) => {
   Authenticate(req, res, () => {
      if (req.user) {
         next();
      } else {
         res.status(403).json("You are not alowed to do that!");
      }
   });
};

module.exports = {
   Authenticate,
   verifyToken,
};

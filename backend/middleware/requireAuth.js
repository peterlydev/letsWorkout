const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorisation token required" });
  }

  //if authorized we need the second item of the token
  const token = authorization.split(" ")[1];

  //verify token
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    //attach user property to the request
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorised" });
  }
};

module.exports = requireAuth;

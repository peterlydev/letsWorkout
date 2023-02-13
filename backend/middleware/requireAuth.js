const jwt = require("jsonwebtoken");
const requireAuth = (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorisation token required" });
  }

  //we need the second item of the token
  const token = authorization.split(" ")[1];

  //verify token
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorised" });
  }
};

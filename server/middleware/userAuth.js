import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "User not authenticated. Login Again" });
  }

  try {

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    
    if(tokenDecode.id){
      req.body.userId = tokenDecode.id;
    } else{
      return res.json({ success: false, message: "Invalid Token. Login Again" });
    }

    next();


  } catch (error) {
    res.json({ success: false, message: error.message });
    
  }
};

export default userAuth;
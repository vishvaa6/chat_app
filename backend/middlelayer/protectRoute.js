import jwt from "jsonwebtoken";
import User from "../modals/user.model.js";

const protectRoute = async (req,res,next)=>{
    
    try {
        
        const token = await req.cookies.jwt;
        if(!token){
           return res.status(401).json({error : "unatharised-NO token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error: "Unatharized Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
           return res.status(404).json({error: "user not found"});
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("error in protect middleWare",error.message);
        res.status(500).json({error: "Internal server error in Protect MiddleWare"})
    }
}

export default protectRoute;
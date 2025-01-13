import User from "../modals/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try{
        

        const {fullname,username,password,confrimPassword,gender} = req.body;

        if(password !== confrimPassword){
            return res.status(400).josn({error:"Password don't match"});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username Already Exist"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password,salt);


        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashpassword,
            gender,
            profilepic: gender === "male" ? boyprofilepic : girlprofilepic
        })

        if (newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilepic: newUser.profilepic,
        });

        }else{
            res.status(400).json({error: "Invalid user data"});
        }
    }catch(error){
        console.log("Internal signup error",error.message);
        res.status(500).json({error:"Internal Server Error"});

    }
}
export const login = async (req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const passwordcorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !passwordcorrect){
            return res.status(400).json({error: "invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic,
        });

    }catch(error){
        console.log("Internal login error",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}    
export const logout = async (req,res)=>{
       try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logedout successfuly"});
       } catch (error) {
        console.log("Internal logout error",error.message);
        res.status(500).json({error: "Internal server error"});
       } 
}
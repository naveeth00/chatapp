import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Sign Up new User



export const signup = async () =>{
    const { fullName, email, password, bio } = req.body;

    try{
        if(!fullName || !email || !password || !bio){
            return resizeBy.json({success: false, message: "Missing Details" })

        }
        const user = await User.findOne({email});

        if(user){
            return resizeBy.json({success: false, message: "Account Already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password, salt);

        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        });

        const token = generateToken(newUser._id)

        res.json({success: true, userData: newUser, token, message: 
            "Account created successfully"
        })
    }catch (error){
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}


//COntroller to login a user

export const login = async (req, res) =>{
    
}
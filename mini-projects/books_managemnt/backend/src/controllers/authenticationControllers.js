import User from "../../models/User.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


export const register = async(req, res) => {
   try{

    const {email, name , password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser) {
        return res.status(409).json({message: "User alrready exists"});

    }

    const hashedPassword = await bcrypt.hash(password,10);  //later use bcrypt.compare in login
    const newUser = new User({name, email, password:hashedPassword})
    await newUser.save();
    res.status(201).json({message: "New user created successfully!"})

    

   }catch(error){
    console.error("Couldnt signup", error)
    res.status(500).json({message:"Internal server error"})

   }
}

export const login = async(req, res) => {
   try{
 const {email, password} = req.body;
 const user = await User.findOne({email}).select('+password');
 if(!user) {
    return res.status(404).json({message: "User not found"})
 }
console.log(user);
console.log(user.password);

 const isMatch = await bcrypt.compare(password, user.password)
 
 if(!isMatch) { 
    return res.status(400).json({message:"Invalid credentials"})
 }

//  jsowebtoken
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );



 res.status(200).json({message:"Login successfull!", token})


   }catch(error){
        console.error("Couldnt login", error)
    res.status(500).json({message:"internal server error"})


   }
}



//separate bcrypt helper file in utils

// import bcrypt from 'bcryptjs';

// export const hashPassword = async (password) => {
//   return await bcrypt.hash(password, 10);
// };

// export const comparePassword = async (password, hashedPassword) => {
//   return await bcrypt.compare(password, hashedPassword);
// };

// controllers to use
// import { hashPassword, comparePassword } from '../utils/bcrypt.js';

// const hashed = await hashPassword(password);
// const isValid = await comparePassword(password, user.password);


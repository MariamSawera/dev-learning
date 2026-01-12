import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim: true

    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required:true 
    },
    password: {
        type:String,
        required:true,
        select: false // prevents password from being returned in queries

    }, 
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",

    }

},
{timestamps: true}
);

const  User = mongoose.model("User", userSchema);
export default User;


// Login password comparison

// JWT auth

// Role-based users (admin/student/etc.)
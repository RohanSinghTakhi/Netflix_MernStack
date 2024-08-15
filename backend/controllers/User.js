const User = require("../models/userModel"); 
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "mySuperSecretKey123456"; 

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid data",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }

        const tokenData = { id: user._id }; // payload
        const token = jwt.sign(tokenData, JWT_SECRET, { expiresIn: "1h" });

        return res.status(200)
            .cookie("token", token, { httpOnly: true }) // Corrected option
            .json({
                message: "Welcome back",
                success: true
            });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Server error",
            success: false
        });
    }
}

const Logout = async (req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:" user logged out successfully",
        success:true
    })
}

const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "Invalid data",
                success: false
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "Email already used",
                success: false
            });
        }

        // Hash the password before saving it
        const hashedPassword = await bcryptjs.hash(password, 12);

        // Create the user
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        // Generate a JWT token for the new user
        const tokenData = { id: newUser._id };
        const token = jwt.sign(tokenData, JWT_SECRET, { expiresIn: "1h" });

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            token // Include token in response if needed
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Server error",
            success: false
        });
    }
};

module.exports = {
    Login,
    Register,
    Logout
};

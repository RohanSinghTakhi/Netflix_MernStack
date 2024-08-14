const User = require("../controllers/User");

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

        await User.create({
            fullName,
            email,
            password
        });

        return res.status(201).json({
            message: "User registered successfully",
            success: true
        });
        
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Server error",
            success: false
        });
    }
};

module.exports = Register;

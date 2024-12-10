import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1d", // Token will expire in 1 day
    });

    // Set the cookie with valid `maxAge` as a number (milliseconds)
    return res.status(200).cookie("token", token, {
        httpOnly: true,
        sameSite: "Strict", // Correct the typo: "stric" -> "Strict"
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    }).json({
        success: true,
        message,
        user,
    });
};

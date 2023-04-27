import User from '../models/user'
import cloudinary from 'cloudinary'
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
require('dotenv').config()
// Setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
// Register user => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'bookit/avatars',
        width: '150',
        crop: 'scale'
    })

    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            // result.public_id
            public_id: "PUBLIC_ID",
            // result.secure_url
            url: "URL"
        }
    });

    res.status(200).json({
        success: true,
        data: user,
        message: 'Account Registered successfully'
    })
})


export {
    registerUser
}
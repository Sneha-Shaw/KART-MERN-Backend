import userModel from '../models/user.model.js'
import { generateToken } from '../utils/generateToken.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import env from 'dotenv'
import isEmpty from '../utils/isEmpty.js'

env.config()

// @route: POST /public/auth/register
// @desc: Register user
// @access: Public
export const registerUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            mobile
        } = req.body

        if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        else {
            const checkEmail = await userModel.findOne({
                email
            })
            if (checkEmail) {
                const createUserAccount = await userModel.create({
                    username,
                    email,
                    password,
                    mobile
                })
                if (createUserAccount) {
                    res.json({
                        _id: createUserAccount._id,
                        name: createUserAccount.username,
                        email: createUserAccount.email,
                        mobile: createUserAccount.mobile
                    })
                }
                else {
                    res.status(400).json({
                        success: false,
                        message: 'Invalid user data'
                    })
                }
            }
            else {
                res.status(400).json({
                    success: false,
                    message: 'User already exists'
                })
            }
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

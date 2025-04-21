import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            return res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
        }
        return ;
    }
    return res.status(401).send({ message: 'Invalid email or password' });
}));

export default userRouter;

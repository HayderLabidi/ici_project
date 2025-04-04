import express from  "express"
const userRouter = express.Router();

userRouter.get('/seed', async(req,res)=> {
    const createUsers = await User.insertMany(data.users);
    res.send({createUsers});
});
export default userRouter;
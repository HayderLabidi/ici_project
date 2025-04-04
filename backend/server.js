import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb://localhost27017/formation_ici_code',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find((x)=> x._id === req.params.id)
    if(product){
        res.send(product)
    }else{
       res.status(404).send ({ message: 'Product not found'})
    }
})

app.get('/api/products',(req , res) =>{
    res.send(data.products)


});

// app.get('/',(req , res) =>{
//     res.send('server is ready')

// });
app.use('/api/users', userRouter);
const port = 5000;
app.listen(port , () =>{
    console.log(`Serveur démarré sur http://localhost:${port}`);

});
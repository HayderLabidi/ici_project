import express from 'express';
import data from './Data.js';

const app = express();

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


// });s
const port = 5000;
app.listen(port , () =>{
    console.log(`Serveur démarré sur http://localhost:${port}`);

});
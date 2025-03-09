import express from 'express';
import data from './data.js';

const app = express();

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
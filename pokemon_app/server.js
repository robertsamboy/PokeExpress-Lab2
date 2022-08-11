
const express = require('express');
const mongoose = require('mongoose')
const pokemons = require('./models/pokemon');
require('dotenv').config();
const pokemon = require('./models/pokemon')
const app = express();
const port = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')})


app.use(express.urlencoded({extended:false}))
// setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon/',(req,res)=>{
    res.render('Index', {pokemons:pokemons})
})
app.post('/pokemon/x/', (req,res)=>{
    res.render('Show',{pokemons:pokemons})    
})
app.get('/pokemon/x/:input',(req,res)=>{
    res.render('Show',{pokemon:pokemons[req.params.input]}) 
})
app.get('/pokemon/:id', (req,res)=>{
    res.render('Show',{pokemon: pokemons[req.params.id]})
})
app.listen(port,() => {
    console.log('I am listening on port' , port);
}); 



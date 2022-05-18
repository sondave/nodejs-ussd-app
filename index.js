const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000


//mongo db connection
const database_url = 'mongodb://localhost:27017/ussd';
mongoose.connect(database_url);
const db = mongoose.connection;

db.on('error', (err) => {
	console.log(err)
})

db.once('open',()=>{
	console.log('Database is running')
})


// initialize body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



app.get('/',(req, res) => {
	// res.send(body?:any): response<any, number>
	res.send('Success message')
})


app.listen(PORT, ()=>{
	console.log('app is running on port '+ PORT)
})
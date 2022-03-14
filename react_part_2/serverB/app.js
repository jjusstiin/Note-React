const express = require('express');
const app = express();
app.listen(3000);

let cors = require('cors');
app.use(cors());

app.use(express.static('public'));

app.get('/getData',function(req,res){
    res.send("{'id': 3, 'qty' : 200}")
})
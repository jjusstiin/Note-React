const express = require('express');
const app = express();
app.listen(3000);

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/getData',function(req,res){
    res.send("{'id': 3, 'qty' : 200}")
})
const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');

app.use(express.json())
app.use(express.static(path.join(__dirname,'Static')))


app.get('/pincodeSwagger',(req,res)=>{
  res.sendFile(path.join(__dirname,'Static','pincodeSwagger.json'))
})


app.get('/stockSwagger',(req,res)=>{
  res.sendFile(path.join(__dirname,'Static','stockSwagger.json'))
})


app.use(cors());

app.use('/', require('./Routes/stockDataUploadRoute'));

app.use('/',require('./Routes/createApiRoute'))

app.use('/',require('./Routes/userRoute'))

app.use('/',require('./Routes/dataRoute'))



const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


module.exports = app

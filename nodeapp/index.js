const express = require('express')
const app = express()
const port = 3000

app.get('/sumar', (req, res) => {
   let num1=parseInt( req.query.num1);  
   let num2= parseInt( req.query.num2);  
   let suma= num1 +num2;
   res.json({Mensaje:'El resultado es '+suma});
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
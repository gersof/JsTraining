const express = require('express');
const app = express();

// // app.get('/', (req, res) =>{
// //     res.send('hello andres');
// });

app.get('/sumar', (req, res) => {
   
    let num1=parseInt( req.query.num1);  
    let num2= parseInt( req.query.num2);
     if (num1>5 && num2 >5) {
         res.send('los numeros ingresados deben ser <= 5');
     }else{let suma= num1 +num2;
    res.json({Mensaje:'El resultado es '+suma});}
    
 });
 
 app.get ('/restar', (req ,res)=>{
 
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    if (num1<num2){
        res.send('el primer numero ingresado es menor que su substractor, ingresa uno mayor');
    }else{
            let resta = num1 - num2;
    res.json(`el resultado de la resta es ${resta}`);
    }

 });

 app.get('/multiplicar', (req, res)=>{
     
    let num1= parseInt(req.query.num1);
    let num2 =parseInt(req.query.num2);
    if (num1 === num2){
        res.send('los numeros ingresados deben ser diferenes');
    }else{
        let multiplicar = num1 * num2;
        res.json(`la multiplicacion de los numeros es ${multiplicar}`);
    }
 });

 

 
 app.get('/dividir', (req, res)=>{
     
    let num1 = parseInt(req.query.num1);
    let num2= parseInt(req.query.num2);
    let dividir = num1 / num2;
    if (dividir < 1){
        res.send('el resultado es menor a 1, por favor ingresa otros valores ');
    }else{
        
        res.json(`el resultado de la division es ${dividir}`);
    }

    app.use(express.static('presentacion'));
 });

app.listen(3000, ()=> {
    console.log('server on port 3000');
});
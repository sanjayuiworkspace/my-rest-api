const express = require('express');
const dotenv = require('dotenv');
const mongoose =  require('mongoose');
const carMockData = require('./mock.json');
const fs = require('fs');
const { type } = require('os');
const connectDb = require('./config/db');
const employeeRoutes =  require('./routes/user.routes');

dotenv.config();
const app = express();

/* Database */
connectDb();

/* Middlewares */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/user-details',employeeRoutes);

app.use((req,resp,next)=>{
    console.log('Middleware 1');
    fs.appendFile('log.txt',`${Date.now()}:${req.method}:${req.url}`,(err,data)=>{
        next();
    })
})

 /* Server */
const port =  process.env.port || 3000;
app.listen(port, () => {
    console.log('Server running on port 3000')
})


// app.get('/api/user-details',async (req,resp)=>{
//     const empData = await employeeData.find({id:1});
//     console.log(empData)
//     return resp.status(200).json(empData)
// })
// app.post('/api/user-details',async(req,resp)=>{
//     const body = req.body;
//     const result = await employeeData.create({
//     id: body.id,
//     email: body.email,
//     name: body.name,
//     phone: body.phone,
//     address:body.address,
//     city: body.city,
//     state: body.state
// });
// console.log('result',result)
// return resp.status(201).json({'message':'Suc    qAAcessfully posted data...'})
// })

// app.put('/api/user-details/:id',async(req,resp)=>{
//     const paramId = req.params.id;
//     const body = req.body;
//     const query = {id:paramId};
//     const data = await employeeData.find({id:paramId});
//     console.log('got the data',data,paramId)
//    if(data[0]?.id){
//          let result =   await employeeData.updateOne(query,body);
//          return resp.send(result).status(200);
//    }else{
//     return resp.status(404).json({'message':`Data not found for ${paramId}`})
// }

// })

// app.delete('/api/user-details/:id',async(req,resp)=>{
//     const paramId = req.params.id;
//     const body = req.body;
//     const query = {id:paramId};
//     const data = await employeeData.find({id:paramId});
//     console.log('got the data',data,paramId)
//    if(data[0]?.id){
//          let result =   await employeeData.deleteOne(query,body);
//          return resp.send(result).status(200);
//    }else{
//     return resp.status(404).json({'message':`Data not found for ${paramId}`})
// }

// })
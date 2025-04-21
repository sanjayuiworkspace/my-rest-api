const empData =  require('../models/user.model');

exports.getUser = async (req,resp) => {
    const empData = await empData.find({id:1});
    console.log(empData)
    return resp.status(200).json(empData)
}

exports.createUser = async(req,resp)=>{
    const body = req.body;
    const result = await empData.create({
    id: body.id,
    email: body.email,
    name: body.name,
    phone: body.phone,
    address:body.address,
    city: body.city,
    state: body.state
});
console.log('result',result)
return resp.status(201).json({'message':'Suc    qAAcessfully posted data...'})
}
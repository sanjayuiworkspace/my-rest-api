const mongoose =  require('mongoose');

const connectDb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI).then((mongoConnect) =>{
        console.log('MongoDb Connected');
    })
      console.log('MongoDB Connected Successfully!');
    } catch (error) {
      console.error('MongoDB Connection Failed:', error);
      process.exit(1);
    }
  };
// const connectDb = mongoose.connect(process.env.MONGO_URI)
// .then((mongoConnect) =>{
//     console.log('MongoDb Connected');
// })
// .catch((err)=> console.log('Error in connecting mongo Db'));

module.exports =  connectDb;
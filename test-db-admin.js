const mongoose = require('mongoose');
const uri = "mongodb+srv://cfisanjaysoni_db_user:hjE1DcQpSMNXs3qs@cluster0.ypudnyp.mongodb.net/?authSource=admin";

console.log('Testing with authSource=admin...');
mongoose.connect(uri)
  .then(() => {
    console.log('✅ Connection with authSource=admin Successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection Failed:', err.message);
    process.exit(1);
  });

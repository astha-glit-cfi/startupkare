const mongoose = require('mongoose');
const uri = "mongodb+srv://cfisanjaysoni_db_user:hjElDcQpSMNXs3qs@cluster0.ypudnyp.mongodb.net/?appName=Cluster0";

console.log('Testing with lowercase L instead of 1...');
mongoose.connect(uri)
  .then(() => {
    console.log('✅ Connection with lowercase L Successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection Failed:', err.message);
    process.exit(1);
  });

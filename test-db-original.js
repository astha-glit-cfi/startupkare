const mongoose = require('mongoose');
const uri = "mongodb+srv://cfisanjaysoni_db_user:hjE1DcQpSMNXs3qs@cluster0.ypudnyp.mongodb.net/?appName=Cluster0";

console.log('Testing Original URI...');
mongoose.connect(uri)
  .then(() => {
    console.log('✅ Original Connection Successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Original Connection Failed:', err.message);
    process.exit(1);
  });

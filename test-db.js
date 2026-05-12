const fs = require('fs');
const mongoose = require('mongoose');

try {
    const env = fs.readFileSync('.env.local', 'utf8');
    const match = env.match(/MONGODB_URI=(.*)/);
    if (!match) throw new Error('MONGODB_URI not found in .env.local');
    
    const uri = match[1].trim();
    console.log('Attempting to connect to:', uri.substring(0, 20) + '...');

    mongoose.connect(uri)
      .then(() => {
        console.log('✅ Connection Successful!');
        process.exit(0);
      })
      .catch(err => {
        console.error('❌ Connection Failed:', err.message);
        process.exit(1);
      });
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
}

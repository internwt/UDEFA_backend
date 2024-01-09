const { MongoClient } = require('mongodb');

// Replace the connection string with your own
const uri = 'mongodb://127.0.0.1:27017/mern_ecommerce';

async function main() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Perform database operations here

  } finally {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  }
}
module.exports = main;


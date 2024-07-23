const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://@cluster0.ga5jgep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 500, // Increase timeout to 5 seconds
});

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

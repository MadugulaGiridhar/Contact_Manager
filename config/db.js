const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDatabase = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected ...');
  } catch (error) {
    console.error('database error :', error);
    process.exit(1);
  }
};

module.exports = connectDatabase;

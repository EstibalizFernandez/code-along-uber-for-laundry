const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/uber-for-loundry', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
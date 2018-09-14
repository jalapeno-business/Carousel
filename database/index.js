const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carousel', { useNewUrlParser: true });

const photoSchema = mongoose.Schema({
  id: Number,
  photo: Array,
});

const Photos = mongoose.model('photo', photoSchema);

const save = (data, callback) => {
  const photod = new Photos(data);

  photod.save().then(() => {
    console.log('SAVED IN DB');
    callback(null);
  });
};

const get = (num, callback) => {
  Photos.find({ id: num }, (err, photo) => {
    if (err) {
      console.log(err, 'MONGODB FIND NOT WORKING');
      return callback(err, null);
    }
    return callback(null, photo);
  });
};

module.exports.save = save;
module.exports.get = get;

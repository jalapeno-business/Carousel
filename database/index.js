const mongoose = require('mongoose');
const resturants = require('./script.js')
mongoose.connect('mongodb://localhost/carousel', { useNewUrlParser: true });

let photoSchema = mongoose.Schema({
    id: Number,
    photo: String
});

const Photos = mongoose.model('photo', photoSchema);

let save = (data, callback) => {
    var photod = new Photos(data)

    photod.save().then(() => {
        console.log('SAVED IN DB');
        callback(null)
    })
}

let get = (callback) => {
    Photos.find((err, photo) => {
        if(err) {
            console.log(err, `MONGODB FIND NOT WORKING`)
        } else {
            callback(null, photo)
        }
    })
}

module.exports.save = save;
module.exports.get = get;


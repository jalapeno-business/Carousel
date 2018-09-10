//create a random array of random photos
//i:-
//o:array of objects. In each object is an array of photos

const db = require('./index.js')

const createPhotoArray = function() {
    let photoArr = [];
    let randomNum10 = Math.floor(Math.random()*10 + 1);

    for (let i = 0; i < randomNum10; i++) {
        photoArr.push(`https://s3-us-west-1.amazonaws.com/food-zagat/images/food-${Math.floor(Math.random()*59)}.jpg`)

    }

    return photoArr;
}

const createResturant = function(num) {
    return {
        id: num,
        photo: createPhotoArray()
    }
}

let count = 1;
const max = 5;
const resturants = [];

while(count <= max) {
    resturant=createResturant(count);
    resturants.push(resturant);
    count++;
}

// resturants.map((resturant) => {
//     db.save(resturant)
// })

module.exports.resturants = resturants


// [ { id: 1,
// photo:
// [ 'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-28.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-55.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-24.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-48.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-22.jpg' ] },
// { id: 2,
// photo:
// [ 'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-6.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-53.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-5.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-33.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-0.jpg' ] },
// { id: 3,
// photo:
// [ 'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-47.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-38.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-2.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-36.jpg' ] },
// { id: 4,
// photo:
// [ 'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-15.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-38.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-40.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-42.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-34.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-21.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-19.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-7.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-27.jpg' ] },
// { id: 5,
// photo:
// [ 'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-53.jpg',
//   'https://s3-us-west-1.amazonaws.com/food-zagat/images/food-12.jpg' ] } ]
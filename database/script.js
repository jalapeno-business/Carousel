// create a random array of random photos
// i:-
// o:array of objects. In each object is an array of photos


const createPhotoArray = () => {
  const photoArr = [];
  const randomNum10 = Math.floor(Math.random() * 10 + 1);

  for (let i = 0; i < randomNum10; i += 1) {
    photoArr.push(`https://s3-us-west-1.amazonaws.com/food-zagat/images/food-${Math.floor(Math.random() * 59)}.jpg`);
  }

  return photoArr;
};


const createResturant = (num) => {
  const photoObj = {
    id: num,
    photo: createPhotoArray(),
  };

  return photoObj;
};

let count = 1;
const max = 100;
const resturants = [];

while (count <= max) {
  const resturant = createResturant(count);
  resturants.push(resturant);
  count += 1;
}


module.exports.resturants = resturants;


// const db = require('./index');
// function to add resturants to db
// resturants.map((resturant) => db.save(resturant, (err) => {
//   if (err) {
//     console.log('error in db');
//   } else {
//     console.log('success');
//   }
// }));

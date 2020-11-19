const { Shoe, Color, Size, Quantity, Shoecolor, Shoesize } = require('./schema.js');

Shoesize.drop()
.then(() => {
  Shoecolor.drop();
})
.then(() => {
  Quantity.drop();
})
.then(() => {
  Size.drop();
})
.then(() => {
  Color.drop();
})
.then(() => {
  Shoe.drop();
})
.catch(error => {
  console.error(error);
});
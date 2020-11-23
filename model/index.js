const { Color, Size, Quantity, Shoecolor, Shoesize } = require('../db/schema.js');
const { Op } = require('sequelize');


let colors = (id) => {
  return new Promise((resolve, reject) => {
    Shoecolor.findAll({
      where: {
        shoe_id: id
      }
    })
    .then (shoeColors => {
      return shoeColors.map(x => x.dataValues.color_id);
    })
    .then(colorIDs => {
      Color.findAll({
        where: {
          id: {
            [Op.or]: colorIDs
          }
        }
      })
      .then(results => {
        resolve(results.map(x => x.dataValues));
      })
    })
    .catch(err => {
      reject(err);
    });
  });
};

let sizes = (id) => {
  return new Promise((resolve, reject) => {
    Shoesize.findAll({
      where: {
        shoe_id: id
      }
    })
    .then (shoesizes => {
      return shoesizes.map(x => x.dataValues.size_id);
    })
    .then(sizeIDs => {
      Size.findAll({
        where: {
          id: {
            [Op.or]: sizeIDs
          }
        }
      })
      .then(results => {
        resolve(results.map(x => x.dataValues));
      })
    })
    .catch(err => {
      reject(err);
    });
  });
};

let quantity = (shoeID, colorID) => {
  return new Promise((resolve, reject) => {
    Quantity.findAll({
      where: {
        shoe_id: shoeID,
        color_id: colorID
      }
    })
    .then(results => {
      resolve(results.map(x => ({ size_id: x.dataValues.size_id, quantity: x.dataValues.quantity })));
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = {
  get: {
    colors: colors,
    sizes: sizes,
    quantity: quantity
  }
}
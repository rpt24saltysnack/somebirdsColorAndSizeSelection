import { expect } from 'chai';
const { Shoe, Color, Size, Quantity, Shoecolor, Shoesize } = require('../db/index.js');

describe('Database', () => {
  it('has a shoes table with 100 records', () => {
    return Shoe.findAll({})
    .then(shoes => {
      expect(shoes.length).to.equal(100);
    })
  });

  it('has a colors table with 25 records', () => {
    return Color.findAll({})
    .then(colors => {
      expect(colors.length).to.equal(25);
    })
  });

  it('has a sizes table with 19 records', () => {
    return Size.findAll({})
    .then(sizes => {
      expect(sizes.length).to.equal(19);
    })
  });

  it('has a quantities table with 32,500 records', () => {
    return Quantity.findAll({})
    .then(quantities => {
      expect(quantities.length).to.equal(32500);
    })
  });

  it('has a shoecolors table with 2,500 records', () => {
    return Shoecolor.findAll({})
    .then(shoecolors => {
      expect(shoecolors.length).to.equal(2500);
    })
  });

  it('has a shoesizes table with 1,300 records', () => {
    return Shoesize.findAll({})
    .then(shoesizes => {
      expect(shoesizes.length).to.equal(1300);
    })
  });
});
import { expect } from 'chai';
const { Shoe, Color, Size, Quantity, Shoecolor, Shoesize } = require('../db/schema.js');

describe('Database', () => {
  it('has a shoes table with 99 records', () => {
    Shoe.findAll({})
    .then(shoes => {
      expect(shoes.length).to.equal(99);
    })
    .catch(err => {
      console.error(err);
    });
  });

  it('has a colors table with 25 records', () => {
    Color.findAll({})
    .then(colors => {
      expect(colors.length).to.equal(25);
    })
    .catch(err => {
      console.error(err);
    });
  });

  it('has a sizes table with 19 records', () => {
    Size.findAll({})
    .then(sizes => {
      expect(sizes.length).to.equal(19);
    })
    .catch(err => {
      console.error(err);
    });
  });

  it('has a quantities table with 32,500 records', () => {
    Quantity.findAll({})
    .then(quantities => {
      expect(quantities.length).to.equal(32500);
    })
    .catch(err => {
      console.error(err);
    });
  });

  it('has a shoecolors table with 2,500 records', () => {
    Shoecolor.findAll({})
    .then(shoecolors => {
      expect(shoecolors.length).to.equal(2500);
    })
    .catch(err => {
      console.error(err);
    });
  });

  it('has a shoesizes table with 1,300 records', () => {
    Shoesize.findAll({})
    .then(shoesizes => {
      expect(shoesizes.length).to.equal(1300);
    })
    .catch(err => {
      console.error(err);
    });
  });
});

import { expect } from 'chai';
const shoes = require('../model');
const exampleData = require('./exampleData/endpoint_responses.js');
const [shoeID, colorID] = [1, 1];

describe('API Endpoints', () => {

  it('GET request to /shoes/:shoeId/colors should return data that matches example data', () => {
    return shoes.get.colors(shoeID)
    .then(colorData => {
      expect(JSON.stringify(colorData)).to.equal(JSON.stringify(exampleData.colors));
    })
  });

  it('GET request to /shoes/:shoeId/sizes should return data that matches example data', () => {
    return shoes.get.sizes(shoeID)
    .then(sizeData => {
      expect(JSON.stringify(sizeData)).to.equal(JSON.stringify(exampleData.sizes));
    })
  });

  describe('GET request to /shoes/:shoeId/colors/:colorId/quantities should return data with the correct shape', () => {
    it('Returns an array of objects', () => {
      return shoes.get.quantity(shoeID, colorID)
      .then(quantityData => {
        expect(Array.isArray(quantityData)).to.equal(true);
      })
    });
    it(`Objects within array should have a 'size_id' and 'quantity' properties with values of type 'number'`, () => {
      return shoes.get.quantity(shoeID, colorID)
      .then(quantityData => {
        expect(JSON.stringify(Object.keys(quantityData[0]))).to.equal(JSON.stringify(['size_id', 'quantity']));
        expect(typeof quantityData[0].size_id).to.equal('number');
        expect(typeof quantityData[0].quantity).to.equal('number');
      })
    });
  });

});

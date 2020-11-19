import { expect } from 'chai';
const shoes = require('../model');
const exampleData = require('./exampleData/endpoint_responses.js');
const [shoeID, colorID, sizeID] = [1, 1, 10];

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

  it('GET request to /shoes/:shoeId/colors/:colorId/sizes/:sizeId/quantity should return data that matches example data', () => {
    return shoes.get.quantity(shoeID, colorID, sizeID)
    .then(quantityData => {
      expect(JSON.stringify(quantityData)).to.equal(JSON.stringify(exampleData.quantity));
    })
  });

});

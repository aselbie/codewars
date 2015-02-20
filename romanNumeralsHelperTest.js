var expect = require('chai').expect;
var RomanNumerals = require('./romanNumeralsHelper');

describe('Roman Numerals Helper Object', function(){

  it('It should have a "toRoman" method than encodes numerals', function() {
    expect(RomanNumerals.toRoman(1000)).to.equal('M');
  });

  it('It should have a "fromRoman" method than decodes numerals', function() {
    expect(RomanNumerals.fromRoman('M')).to.equal(1000);
  });

})
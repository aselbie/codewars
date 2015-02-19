var expect = require('chai').expect;
var solution = require('./romanNumeralsDecoder');

describe('Roman Numerals Decoder', function(){

  it('It should return a number', function() {
    expect(solution('XXI')).to.be.a('number');
  });

  it('It should map numerals to their corresponding numbers', function() {
    expect(solution('I')).to.equal(1);
    expect(solution('V')).to.equal(5);
    expect(solution('X')).to.equal(10);
    expect(solution('L')).to.equal(50);
    expect(solution('C')).to.equal(100);
    expect(solution('D')).to.equal(500);
    expect(solution('M')).to.equal(1000);
  });

  it('It should handle numbers made of of multiple numerals', function() {
    expect(solution('VI')).to.equal(6);
    expect(solution('XXIII')).to.equal(23);
    expect(solution('MDCLXVI')).to.equal(1666);
  });

  it('It should handle numbers with complex pairs', function() {
    expect(solution('IV')).to.equal(4);
    expect(solution('IX')).to.equal(9);
    expect(solution('MMDCCCXCVI')).to.equal(2896);
  });

})
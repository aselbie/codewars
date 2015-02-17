var expect = require('chai').expect;
var solution = require('./romanNumeralsEncoder');

describe('Roman Numerals Encoder', function(){

  it('It should return a string', function() {
    expect(solution(1000)).to.be.a('string');
  });

  it('It should map numbers to their corresponding numerals', function() {
    expect(solution(1)).to.equal('I');
    expect(solution(5)).to.equal('V');
    expect(solution(10)).to.equal('X');
    expect(solution(50)).to.equal('L');
    expect(solution(100)).to.equal('C');
    expect(solution(500)).to.equal('D');
    expect(solution(1000)).to.equal('M');
  });

  it('It should handle numbers made of of multiple numerals', function() {
    expect(solution(6)).to.equal('VI');
    expect(solution(15)).to.equal('XV');
    expect(solution(1500)).to.equal('MD');
    expect(solution(1666)).to.equal('MDCLXVI');
  });

  it('It should handle numbers with repeated numerals', function() {
    expect(solution(3)).to.equal('III');
    expect(solution(300)).to.equal('CCC');
  });

  it('It should handle numbers with complex pairs', function() {
    expect(solution(4)).to.equal('IV');
    expect(solution(9)).to.equal('IX');
    expect(solution(2896)).to.equal('MMDCCCXCVI');
  });

})
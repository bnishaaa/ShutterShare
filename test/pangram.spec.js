import chai from 'chai';
import isPangram from '../src/pangram';

describe('Pangram check for string', function () {
  it('returns true as the input is a valid pangram string', function () {
    chai.assert.equal(isPangram('abcdefghijklmnopqrstuvwxyz'), true);
  });
  it('returns false as the input is not a pangram string, m missing', function () {
    chai.assert.equal(isPangram('abcdefghijkl nopqrstuvwxyz'), false);
  });
});

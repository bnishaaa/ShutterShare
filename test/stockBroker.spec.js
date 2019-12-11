import chai from 'chai';
import balanceStatements from '../src/stockBroker';

describe('Clients place orders to a stockbroker', function () {
  it('Test Example 1 in the question :Buy: 169850 Sell: 116000; Badly formed 1', function () {
    const balanceStatement = balanceStatements('GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S');
    chai.assert.equal(balanceStatement, 'Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;');
  });
  it('Test Example 2 in the question : Buy: 29499 Sell: 01', function () {
    const balanceStatement = balanceStatements('ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B');
    chai.assert.equal(balanceStatement, 'Buy: 29499 Sell: 0');
  });
  it('Checks if the S and B values are truncated : formatted with no decimal', function () {
    const balanceStatement = balanceStatements('ABCD 13 2.66 B, EFG 14 2.8 S');
    chai.assert.equal(balanceStatement, 'Buy: 34 Sell: 39');
  });
  it('Checks for multiple invalid orders: non integer quantity : non decimal price ', function () {
    const balanceStatement = balanceStatements('ABCD 1.3 2 B, EFG 14 2 S');
    chai.assert.equal(balanceStatement, 'Buy: 0 Sell: 0; Badly formed 2: ABCD 1.3 2 B ;EFG 14 2 S ;');
  });
});


/**
   * Initialize a function to check whether a number is a valid double with dot.
   * @param {*} num - Input Number
   * @return {boolean} true - if the num is valid else false
   */
function isDoubleWithDot(num) {
  // checks if the num contains '.'
  const containsDot = (num.toString().split('.').length) > 1;
  return (containsDot && Number(num) == num);
}
/**
   * Initialize a closure function to process the order. It returns two functions
   * stockCalculator - Calculates the buy and sell value
   * and identifies the badly formatted orders.
   * displayOutput - Generates the output in the desired format;
   * @return {object} contains two functions - stockCalculator & displayOutput
   */
const processOrder = function () {
  let buy = 0;
  let sell = 0;
  const badlyFormed = [];
  let outString = '';
  return {
    /**
     * Initialize a function to calculates buy and sell value and
     * identifies the badly formated orders.
     * @param {string} order - Input order
     */
    stockCalculator(order) {
      // Converts the input to an array with order details..
      const orderDetails = order.trim().split(' ');
      // Checks if order has all 4 details included;

      if (orderDetails.length == 4) {
        /* Checks if Quantity is an int,
        Price a double (with mandatory decimal point "." ),
        Status is represented by the letter B/b or the letter S/s. */
        if (Number.isInteger(Number(orderDetails[1]))
            && isDoubleWithDot(orderDetails[2])
            && (orderDetails[3].toUpperCase() == 'B' || orderDetails[3].toUpperCase() == 'S')) {
          if (orderDetails[3] == 'B') { buy += orderDetails[1] * orderDetails[2]; } else { sell += orderDetails[1] * orderDetails[2]; }
        } else {
          badlyFormed.push(orderDetails);
        }
      } else {
        badlyFormed.push(orderDetails);
      }
    },
    /**
     * Initialize a function to generate the output string by properly
     * formatting with buy and sell value and the invalid orders.
     * @returns {string} order - Output string value to display.
     */
    displayOutput() {
      badlyFormed.forEach((element) => {
        outString = `${outString + element} ;`;
      });
      // Incorporate badly formed information to the output only if an order is invalid.
      const badlyFormedOutput = badlyFormed.length > 0 ? `; Badly formed ${
        badlyFormed.length}: ${outString.replace(/,/g, ' ')}` : '';
      return (`Buy: ${Math.trunc(buy)} Sell: ${Math.trunc(sell)}${badlyFormedOutput}`);
    },
  };
};
// Function that calculates sell and buy values and identifies invalid orders.
export default function balanceStatements(orders) {
  const orderArray = orders.split(',');
  // Creates instance of processOrder to call the methods inside.
  const processOrderInstance = processOrder();
  // Calcuating the stock details- buy and sell value, invalid details.
  orderArray.map((order) => processOrderInstance.stockCalculator(order));
  // Returns the output to be displayed
  return processOrderInstance.displayOutput();
}

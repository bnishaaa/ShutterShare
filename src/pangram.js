
/**
   * Initialize a function to check whether a string is pangram or not.
   * @param {string} num - Input string.
   * @return {boolean} true - if the string is pangram else false
   * or error  message if the input is not valid.
   */
export default function isPangram(input) {
  try {
    if (input) {
      /* Convert the input to string and to lowercase
            for checking against check against the regular expression. */
      const inputLowerCase = input.toString().toLowerCase();
      const regex = /([a-z])(?!.*\1)/g;
      /* Returns true if the unique length of mactched characters
            in the input against regex equals 26, else returns false. */
      return ((inputLowerCase.match(regex) || []).length === 26);
    }
    return ('Please enter a valid  input');
  } catch (error) {
    return error;
  }
}
// console.log(isPangram('abcdefghijklmnopqrstuvwxy!z badbsdbf78855dsdfd'), 'out');

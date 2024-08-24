function convertToRoman(num) {
	// Approach 1
  	const symbols = [
      ['M',1000], 
      ['CM', 900], 
      ['D', 500], 
      ['CD', 400], 
      ['C', 100], 
      ['XC', 90], 
      ['L', 50], 
      ['XL', 40], 
      ['X', 10], 
      ['IX', 9], 
      ['V', 5], 
      ['IV', 4], 
      ['I', 1]
    ];

	let result = "";
  for (let i = 0; i < symbols.length; i++) {
    let [roman, value] = symbols[i];
    while (num >= value) {
      result = result + roman;
      num = num - value;
    }
  }
  return result;
// Approach 2
	/*
	const values = 
        [1000, 900, 500, 400, 100, 
         90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = 
        ['M', 'CM', 'D', 'CD', 'C', 
         'XC', 'L', 'XL', 'X', 'IX', 
         'V', 'IV', 'I'];
    let result = '';

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
	*/
}
module.exports = convertToRoman

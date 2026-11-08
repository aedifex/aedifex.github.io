/*
 * Calculator Javascriptus Numeralis Romanis
 * Converts Hindu-Arabic numerals (1, 2, 3) into Roman numerals (I, II, III).
 * Loaded by _posts/2019-03-03-javascriptus.md via its `js:` front matter.
 */

// Value/symbol pairs, largest first. The subtractive pairs (CM, CD, XC, XL, IX, IV)
// sit alongside the base symbols so the greedy loop below handles them for free.
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

// Greedy conversion: take the largest value that fits, append its symbol, repeat.
function romanize(num) {
  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

// Read the input, validate it, write the result.
// Standard Roman numerals have no zero and top out at 3999 (MMMCMXCIX).
function sayAve() {
  var text = document.getElementById('input').value.trim();
  var output = document.getElementById('output');
  var num = Number(text);

  if (!/^\d+$/.test(text) || num < 1 || num > 3999) {
    output.textContent = 'I – MMMCMXCIX tantum'; // "only I to 3999"
    return;
  }

  output.textContent = romanize(num);
}

// Let Enter convert too, not just the Converte! button.
function bindEnterKey() {
  var input = document.getElementById('input');
  if (!input) return;
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') sayAve();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindEnterKey);
} else {
  bindEnterKey();
}

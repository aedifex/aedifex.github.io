---
layout:     post
title:      "Calculator Javascriptus Numeralis Romanis"
date:       2019-03-03
author:     "Christopher Black"
cover-img: /assets/img/javascriptus.jpg
---

<p>The average computer today has more computing power than all the computers used in the entire Apollo program combined. In an age of big data, smart phones, and cloud computing (Webscale is also a thing if you have not heard), it seems we've come a long way in the past few decades.</p> 

<p>Artificial-intelligence, machine-learning, and self-driving cars are just a handful of some of the more interesting challenges in computer science today. Those problems seem trivial compared to what I'm going to discuss today.</p>
 
Today, I'm here to solve a real problem in computer science.

Converting Hindu-Arabic numerals (eh, the numbers we use today, e.g. 1,2,3) into Roman Numerals (e.g. I, II, III).

<blockquote>Fun fact: the word calculator comes from Latin, meaning little stone.</blockquote>

<h2 class="section-heading">Say ave (er, hello) to Calculator Javascriptus Numeralis Romanis</h2>

<!-- ACTUAL CONVERSION TABLE -->
<div class="box">
<h1>Calculator Javascriptus Numeralis Romanoris</h1>
<hr>
<h4>numerus convertere</h4>
<input type="text" placeholder="pone numerum" id="input"> <!-- press enter -->
<button onclick="sayAve()">Converte!</button>

<div class="result">
<h1>Resultus:</h1>
<h1 id="output"></h1>
</div>

<!-- <p>Conversion Table</p> -->

</div>
<!-- Program -->


A brief history of Roman Numerals

This might come as a surprise but Roman Numerals were invented by the Romans over 2000 years ago and persisted well into the Middle-Ages. Roman Numerals were based on 7 principle symbols (whereas Hindu-Arabic numerals use 9). Despite some incredible feats engineering, the Romans didn’t have the concept of zero. 

The replacement of Roman Numerals and the introduction of zero in Europe go hand in hand; both of which greatly accelerated by the printing press at the end of the 15th century.

<blockquote>If the Romans did have 0, it would look something like: XMMIIXI</blockquote>

All evidence suggests Hindu-Arabic numerals, including the concept of zero (base 10), originated in India and was spread across the Islamic world through North Africa and eventually into Iberia in the 1000s AD. Moorish scholars, in concert with Jews and Christians, were laying the groundwork for modern mathematics and by extension, science.

<blockquote>Fun fact: historically, there has been incredible inconsistancy between the use of the additive (i.e. IIIII XXXXX CCCCC) version the subtractive (i.e. IX IV) forms.</blockquote>

Words like Algebra (Arabic for the unification of pieces) and algorithm (a Latinized version of the name al-Khwārizmī, a great Persian mathematician) come from this period. The replacement of Roman Numerals by Hindo-Arabic numerals ignited revolution in mathematics, which lead to a revolution in science, the product of which nothing short of the modern world. And Webscale. 

<!-- JS here for now -->
<script>
function sayAve() {
  var text = document.getElementById('input').value;
  var numerus = romanize(text);
  document.getElementById("output").innerHTML = numerus;
}


function romanize(num) { 

var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

</script>

<style type="text/css">
.main {
  padding: 200px;
  /*background-color: gray;*/
}
.box {
  background-color: white;
  border: 1px solid #ccc;
  padding: 5px 20px 20px;
}

input {
  font-size: 24px;
  height: 40px;
  width: 40%;
}

.result {
  display: flex;
}

</style>

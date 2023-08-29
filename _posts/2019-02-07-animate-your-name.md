---
layout:     post
date:       2019-03-03
author:     "Christopher Black"
bubbles: true
---

This was a special project for me. I was getting back into programming and found the lesson "Animate Your Name" on Codecademy a few years back. It was a pretty gentle introduction to JavaScript but the end result was really spectacular, as you can see above.

I wanted to incorporate something similar here on my nascent blog. When I visited Codecademy to try to recreate the effect I couldn't find the lesson; looks like they've removed it from their site. A few google searches later I realized how popular the lesson was; other people were looking for information on how to recreate the effect as well.

<http://stackoverflow.com/questions/25172693/javascript-how-to-recreate-animate-your-name-lesson-from-codecademy>
 
Eventually I was able to replicate the effect after a bit of trial and error. The HTML/JavaScript is very simple ~ it was really a matter of finding the correct external assets, i.e. (bubbles.js && alphabet.js).


From main.js
```
var displayText = "You are beautiful";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(displayText, letterColors);
bubbleShape = 'circle';
bounceBubbles();
```

Once I found the assets I did something crazy like copy the files locally, created a small repository and put it on [Github](https://github.com/aedifex/Animate-Your-Name) for posterity. The repo includes everything needed to recreate the effect. Enjoy!

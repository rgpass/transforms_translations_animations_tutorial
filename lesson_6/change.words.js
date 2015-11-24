var changeTextDelay = 1000;

var intervalID = setInterval(function() {
  var visibleWord = document.getElementsByClassName('visible')[0],
    nextWord = visibleWord.nextSibling;

  // Some Gecko-based browsers add a text node for white-space between words
  // 3: text node
  if (nextWord.nodeType === 3) {
    nextWord = nextWord.nextSibling;
  }

  // To have it cycle through
  if (!nextWord) {
    nextWord = document.getElementsByTagName('b')[0];
  }

  if (nextWord) {
    visibleWord.setAttribute('class', 'hidden');
    nextWord.setAttribute('class', 'visible');
  }
  // To only have it run once
  // else {
  //   clearInterval(intervalID);
  // }

}, changeTextDelay);

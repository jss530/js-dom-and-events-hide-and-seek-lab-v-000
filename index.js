function getFirstSelector(selector) {
    const match = document.querySelector(selector);
    return match;
}

function nestedTarget() {
  const match = document.querySelector('#nested .target');
  return match;
}

function increaseRankBy(n) {
  const matches = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < matches.length; i++) {
    matches[i].innerHTML = (i + n)
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

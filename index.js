function getFirstSelector(selector) {
  var result = document.querySelector(selector)
  return result
}


function nestedTarget() {
  var result = document.querySelector(`.target`)
  return result
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll(`ul.ranked-list`)
  
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n).toString();
  }
}


function deepestChild() {
var divGrandNode = document.querySelector(`#grand-node`)
console.log(divGrandNode)
  
}

deepestChild()
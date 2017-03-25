// given an array, selects an item at random
function randomSelect(array) {
  var random_item = array[Math.floor( Math.random() * array.length )];
  return random_item;
  // document.getElementById('demo').innerHTML = page;
  // investigate more
}

// execute
var random_pages = ['/shows/', '/buy/'];
var random_page = randomSelect(random_pages);

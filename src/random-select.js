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

// TO IMPLEMENT:
// to re-direct "etc." page: use meta, JavaScript code, and link
// http://stackoverflow.com/questions/5411538/redirect-from-an-html-page

// window.location = random_page;

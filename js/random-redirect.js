var random_pages = [
  '/random1/',
  '/random2/',
  '/random3/'
];

// given an array, selects an item at random
function randomSelect(array) {
  var random_item = array[Math.floor( Math.random() * array.length )];
  return random_item;
}

window.location = randomSelect(random_pages);

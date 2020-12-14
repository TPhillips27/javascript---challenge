// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select('tbody')
console.log(tableData);


// Step 1: Loop Through `data` and console.log each ufo object
tableData.forEach(function(ufo) {
    console.log(ufo);
});

// Use d3 to update each cell's text with ufo values (date/time, city, state, country, shape, comment)
tableData.forEach(function(ufo){
    //console.log(ufo);
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]){
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

//Set up filter button
var button = d3.select('#filter-btn');

// Select the form. If # is part of form then you have to click as opposed to hitting enter too
var form = d3.select('form');

// Create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

//Complete the event handler function for the form
function runEnter(){

     // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  var filteredData = tableData.filter(entered => entered.datetime === inputValue);

  console.log(filteredData);

  tbody.html('')

  filteredData.forEach(function(ufo){
    //console.log(ufo);
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]){
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
};








// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select('tbody')
console.log(tableData);


// Step 1: Loop Through `data` and console.log each weather report object
tableData.forEach(function(ufo) {
    console.log(ufo);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
tableData.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append('tr');
});

// Step 3:  Use `Object.entries` to console.log each weather report value
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append('tr');

    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        });
});

// Step 4: Use d3 to append 1 cell per ufo sighting value (date/time, city, state, country, shape, comment)
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append('tr');

    Object.entries(ufo).forEach(function([key, value]){
        console.log(key, value);
        //Append a cell to the row for each value in the ufo data object
        var cell = row.append('td');
    });
});

// Step 5: Use d3 to update each cell's text with ufo values (date/time, city, state, country, shape, comment)
tableData.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// BONUS: Refactor to use Arrow Functions!
// data.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
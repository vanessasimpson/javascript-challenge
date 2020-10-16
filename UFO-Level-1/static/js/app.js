// from data.js
let tableData = data;

// YOUR CODE HERE!
// reference table body
let tbody = d3.select("tbody");

//console log the data
console.log(tableData);

//append to the table 

tableData.forEach(addRow);

function addRow(item) {
    let row = tbody.append('tr');
    let result = Object.values(item);
    result.forEach(data => {
        row.append('td').text(data)
    })
}

// select button and form

let button = d3.select("#filter-btn");


// event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// prevent page from refreshing every time "enter" is pushed
  d3.event.preventDefault();
  tbody.html('')

  // Select input element
  let inputElement = d3.select("#datetime");
  
  // Value property of the input element
  let inputValue = inputElement.property('value');


  // Use form to filter the data
  let filteredData = tableData.filter(sighting => sighting.datetime === inputValue );
  filteredData.forEach(addRow)
  console.log(filteredData);
};




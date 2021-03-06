// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
        //clear out any existing data
        tbody.html("");

// loop through each object in data,
// append a row and cells for each value in row
    data.forEach((dataRow) => {
        //append a row to table body
        let row = tbody.append("tr");

        //loop through each field in dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            });
        });
    }


function handleClick() {
    // get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check if date was entered and filter data using date
    if (date) {
        //apply filter to table data, keeping only rows where 'datetime' value
        // matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data. if no date entered, then filteredData will
    //equal the original tableData
    buildTable(filteredData)
};

//attach an event to listen for button click
d3.selectAll("#filter-btn").on("click", handleClick);

//build table when page loads
buildTable(tableData);
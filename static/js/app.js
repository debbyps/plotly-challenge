d3.json('./data/samples.json').then(data =>{
    console.log(data);

    // Sort the data by Greek search results
    var ids = Object.entries(data.samples).forEach(([key,value]) => {
      console.log(key,value);
    })
    //  console.log(ids);
    
    // var ids = Object.values(data.samples)
    //   console.log(ids);
})



// // Slice the first 10 objects for plotting
// slicedData = sortedTopTen.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // Trace1 for the Greek Data
// var trace1 = {
//   x: reversedData.map(object => object.sample_values),
//   y: reversedData.map(object => object.otu_ids),
//   text: reversedData.map(object => object.otu_labels),
//   name: "Bacteria",
//   type: "bar",
//   orientation: "h"
// };

// // data
// var data = [trace1];

// // Apply the group bar mode to the layout
// var layout = {
//   title: "Bacteria search results",
//   margin: {
//     l: 100,
//     r: 100,
//     t: 100,
//     b: 100
//   }
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);

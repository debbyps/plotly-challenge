// create an initiation to display info on html launch
function init(){
    // use d3 to select the dropdown section of the html
    let dropDown = d3.select("#selDataset")
    // read the json data
    d3.json('./data/samples.json').then((data) =>{
        // display all data in json on the console
        console.log(data);
        // get all the ids of the patients sampled
        // let ids = Object.values(data.names)
        //     // put into console just to see
        //     console.log(ids);
    // for each id in data names add an option into the dropdown
            data.names.forEach(id =>{
                dropDown.append("option").attr("value",id).text(id)
      })

      // call the build details to pull demographic data
       buildDemographics(id[0]);
       buildTopTen(id[0]);
    })
  }  


  function buildDemographics(id) {
     // read the json data
    d3.json('./data/samples.json').then(data =>{
       let metaDataDemographics = data.metadata;
       // get all the ids of the patients sampled; had to change to a string
       let finalArray = metaDataDemographics.filter(d => d.id.toString() === id)[0]
       let box = d3.select("#sample-metadata")
      // clear out info in demographics before new load
        box.html("")
        box.append("h5").text(`id:${finalArray.id}`)
        box.append("h5").text(`ethnicity:${finalArray.ethnicity}`)
        box.append("h5").text(`gender:${finalArray.gender}`)
        box.append("h5").text(`age:${finalArray.age}`)
        box.append("h5").text(`location:${finalArray.location}`)
        box.append("h5").text(`bbtype:${finalArray.bbtype}`)
        box.append("h5").text(`wfreq:${finalArray.wfreq}`)
        console.log(finalArray)
   })
}

    function buildTopTen(id) {
      // read the json data
      d3.json('./data/samples.json').then(data =>{
        // make sure to only grab the sample array for the id selected
        let sampleData = data.samples.filter(d => d.id.toString() === id)[0]; 
          console.log(sampleData)
        // get only the values of the top ten
        let ttValueArray = sampleData.sample_values.slice(0,10)
          console.log(ttValueArray)
          
    })
}
function optionChanged(id){
  buildDemographics(id)
  buildTopTen(id)
}

init()
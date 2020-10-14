// d3.selectAll("#selDataset").on("change", optionChanged);
// create an initiation to display info on html launch
function init(){
    // use d3 to select the dropdown section of the html
    let dropDown = d3.select("#selDataset")
    // read the json data
    d3.json('./data/samples.json').then(data =>{
        // display all data in json on the console
        // console.log(data);
        // get all the ids of the patients sampled
        let ids = Object.values(data.names)
            // put into console just to see
            console.log(ids);
    // for each id in data names add an option into the dropdown
            ids.forEach(id =>{
            dropDown.append("option").attr("value",id).text(id)
      })

      // call the build details to pull demographic data
       buildDemographics(940);
    })
  }  

  function buildDemographics(ids) {
     // get all the ids of the patients sampled
    d3.json('./data/samples.json').then(data =>{
       var metaDataDemographics = data.metadata;
       var finalArray = metaDataDemographics.filter(d => d.id === ids)[0]
        console.log(metaDataDemographics)
       var box = d3.select("#sample-metadata")
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

function optionChanged(ids){
  buildDemographics()
}

init()

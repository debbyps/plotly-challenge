// d3.selectAll("#selDataset").on("change", optionChanged);

function init(){
  let dropDown = d3.select("#selDataset")
  // d3.event.preventDefault();
  
// }
// function optionChanged(){
  d3.json('./data/samples.json').then(data =>{
    
    console.log(data);

    // get all the ids of the patients sampled
    var ids = Object.values(data.names)
      console.log(ids);
    
      ids.forEach(id =>{
        var dropDownOpt = dropDown.append("option").attr("value",id).text(id)
        
      })
       buildDetails(ids);
    })
  }  

  function buildDetails(ids) {
     // get all the ids of the patients sampled
    d3.json('./data/samples.json').then(data =>{
       var metaDataDemographics = data.metadata;
       var mdID = metaDataDemographics.filter(d => d.id === ids)
       var finalArray = mdID[0]
       // var samplesData = data.samples;  
        console.log(metaDataDemographics)
       //  console.log(samplesData)
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
init()

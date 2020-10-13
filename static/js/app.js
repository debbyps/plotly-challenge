function  dropDownValues() {
  d3.json('./data/samples.json').then(data =>{
    console.log(data);

    // get all the ids of the patients sampled
    var ids = Object.values(data.names)
      console.log(ids);
    
      ids.forEach(id =>{
        var dropDownOpt = d3.select("#selDataset").append("option").attr("value",id).text(id)
        
      })
      buildDetails(id);
    })

  function buildDetails(id) {
    // get all the ids of the patients sampled
    d3.json('./data/samples.json').then(data =>{
      var metaDataDemographics = data.metadata.ethnicity;
      // var samplesData = data.samples;  
       console.log(metaDataDemographics)
      //  console.log(samplesData)
  })
})

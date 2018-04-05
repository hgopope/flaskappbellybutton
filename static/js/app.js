
/*
gather sample names and place in dropdown
*/
// api endpoint for sample names
// var sampleNamesUrl = '/names'

// Plotly.d3.json(sampleNamesUrl, function(error, sampleNames) {
//     if (error) {
//         return console.warn(error);
//     };

//     sampleNames.forEach( function(name) {
//         Plotly.d3
//         .select('#selDataset')
//         .append('option')
//         .attr('value', name)
//         .attr('class', 'dropDownItem')
//         .text(name)
//     });
// });


function init() {
    var data = [{
        values: [
            25, 25, 25, 25
        ],
        labels: [
            "Spotify", "Soundcloud", "Pandora", "Itunes"
        ],
        type: "pie"
    }];

    var layout = {
        height: 600,
        width: 800
    };

    Plotly.plot("pie", data, layout);
}

init();

/*
// function to capture changes to dropdown selection
// */
// function optionChanged(sample) {
//     // if sample is blank default to sample BB_940
//     sample = (sample === '' ? 'BB_940': sample)

//     // url definitions
//     var sampleURL = `/sample/${sample}`;
//     var otuURL = '/otu';
//     var metadataURL = `/metadata/${sample}`;
//     var wfreqURL = `/wfreq/${sample}`;

//     // api call to sample endpoint
//     Plotly.d3.json(sampleURL, function(error, sampleResponse) {
//         if (error) {
//                 console.warn(error);
//             };
            
//         var allVals = sampleResponse.sample_values;
//         var allIDs = sampleResponse.otu_ids
        
//         var pieValues = allVals.slice(0,10);
//         var pieLabels = allIDs.slice(0,10);
        
//         // api call to otu endpoint
//         Plotly.d3.json(otuURL, function(error, otuResponse) {
//             if (error) {
//                 console.warn(error);
//             }
    
//             var allDescriptions = [];
//             allIDs.forEach( function(data) {
//                 allDescriptions.push(otuResponse[data]);
//             })

//             var pieDescriptions = allDescriptions.slice(0,10);
            
//             Plotly.d3.json(metadataURL, function(error, metaResponse) {
//                 if (error) {    
//                     console.warn(error)
//                 }

//                 var age, bbType, ethnicity, gender, location, sampleID;

//                 age = metaResponse.AGE;
//                 bbType = metaResponse.BBTYPE;
//                 ethnicity = metaResponse.ETHNICITY;
//                 gender = metaResponse.GENDER;
//                 location = metaResponse.LOCATION;
//                 sampleID = metaResponse.SAMPLEID;

//                 Plotly.d3.json(wfreqURL, function(error, wfreqResponse){
//                     if (error) {
//                         console.warn(error)
//                     }                      

//                     var meterLevel = wfreqResponse;
//                     // if plot doesn't exist create new plot
//                     if (document.getElementsByClassName('js-plotly-plot').length === 0) { 
//                         var pieData = [{
//                             values: pieValues,
//                             labels: pieLabels,
//                             type: 'pie',
//                             hovertext: pieDescriptions,
                            
//                         }];
                            
//                         var bubbleData = [{
//                             x: allIDs,
//                             y: allVals,
//                             mode: 'markers',
//                             text: allDescriptions,
//                             marker: {
//                                 color: allIDs,
//                                 size: allVals
//                             },
//                         }];

//                         Plotly.newPlot('pie', pieData);
//                         Plotly.newPlot('bubble', bubbleData);

//                         Plotly.d3.select('#metadata').append('li').attr('id', 'age').text(`AGE: ${age}`)
//                         Plotly.d3.select('#metadata').append('li').attr('id', 'bbType').text(`BBTYPE: ${bbType}`)
//                         Plotly.d3.select('#metadata').append('li').attr('id', 'ethnicity').text(`ETHNICITY: ${ethnicity}`)
//                         Plotly.d3.select('#metadata').append('li').attr('id', 'gender').text(`GENDER: ${gender}`)
//                         Plotly.d3.select('#metadata').append('li').attr('id', 'location').text(`LOCATION: ${location}`)
//                         Plotly.d3.select('#metadata').append('li').attr('id', 'sampleID').text(`SAMPLEID: ${sampleID}`)
                        
//                         gauge(meterLevel)

//                     } else {
//                         // if plots exist restyle plots
//                         // restyle pie plot
//                         var $piePlot = document.getElementById('pie')
//                         Plotly.restyle($piePlot, 'values', [pieValues]);
//                         Plotly.restyle($piePlot, 'labels', [pieLabels]);
//                         Plotly.restyle($piePlot, 'hovertext', [pieDescriptions]);

//                         // restyle bubble plot
//                         var $bubblePlot = document.getElementById('bubble')
//                         var markerProps = {
//                             color: allIDs,
//                             size: allVals
//                         };
//                         Plotly.restyle($bubblePlot, 'x', [allIDs]);
//                         Plotly.restyle($bubblePlot, 'y', [allVals]);
//                         Plotly.restyle($bubblePlot, 'marker', [markerProps]);

//                         // update sample metadata
//                         Plotly.d3.select('#age').text(`AGE: ${age}`)
//                         Plotly.d3.select('#bbType').text(`BBTYPE: ${bbType}`)
//                         Plotly.d3.select('#ethnicity').text(`ETHNICITY: ${ethnicity}`)
//                         Plotly.d3.select('#gender').text(`GENDER: ${gender}`)
//                         Plotly.d3.select('#location').text(`LOCATION: ${location}`)
//                         Plotly.d3.select('#sampleID').text(`SAMPLEID: ${sampleID}`)
                        
                        
                      
//                                 }
//                             }]
//                         };
                        
//                     };
//                 });
//             });
//         });
//     });
// };



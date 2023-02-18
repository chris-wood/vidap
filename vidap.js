// var data = [trace1, trace2];
// Plotly.plot('graph', data, {
//   sliders: [{
    // pad: {
    //   t: 30
    // },
    // currentvalue: {
    //   xanchor: 'right',
    //   prefix: 'color: ',
    //   font: {
    //     color: '#888',
    //     size: 20
    //   }
    // },
    // steps: [{
    //   label: 'red',
    //   method: 'restyle',
    //   args: ['line.color', 'red']
    // }, {
    //   label: 'green',
    //   method: 'restyle',
    //   args: ['line.color', 'green']
    // }, {
    //   label: 'blue',
    //   method: 'restyle',
    //   args: ['line.color', 'blue']
    // }]
//   }]
// }, {
//   showSendToCloud: true,
//   staticPlot: true,
// });

// Generate some random salary data
var salaryValues = [];
for (var i = 0; i < 500; i ++) {
  salaryValues[i] = (Math.random() * 100000) + 25000;
}
var salaryHistogram = {
  x: salaryValues,
  type: 'histogram',
  name: "Salary"
};

// Generate the average distribution over the data
var trace1 = {
  x: [0, 1, 2, 3, 4],
  y: [1, 5, 3, 7, 5],
  mode: 'lines+markers',
  type: 'scatter',
  name: "Average Salary",
  line: {
    dash: 'dot',
    width: 4
  }
};

var data = [trace1, salaryHistogram];

Plotly.react('vidapPlot', data, {
  sliders: [
  {
    pad: {
      t: 0
    },
    currentvalue: {
      xanchor: 'left',
      prefix: 'Threshold: ',
      font: {
        color: '#888',
        size: 20
      }
    },
    steps: [{
      label: 'red',
      method: 'restyle',
      args: ['line.color', 'red']
    }, {
      label: 'green',
      method: 'restyle',
      args: ['line.color', 'green']
    }, {
      label: 'blue',
      method: 'restyle',
      args: ['line.color', 'blue']
    }]
  },
  {
    pad: {
      t: 100
    },
    currentvalue: {
      xanchor: 'left',
      prefix: 'Budget: ',
      font: {
        color: '#888',
        size: 20
      }
    },
    steps: [{
      label: 'red',
      method: 'restyle',
      args: ['marker.color', 'red']
    }, {
      label: 'green',
      method: 'restyle',
      args: ['marker.color', 'green']
    }, {
      label: 'blue',
      method: 'restyle',
      args: ['marker.color', 'blue']
    }]
  },
  ]
}, {
  // staticPlot: true,
});

var contexts = [
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average in a privacy-preserving way.",
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average such that you cannot learn any one individual’s salary contribution.",
  "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
  "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
];
var randomContext = contexts[Math.floor(Math.random()*contexts.length)];
document.getElementById('contextSetup').innerHTML = randomContext;
console.log(randomContext)

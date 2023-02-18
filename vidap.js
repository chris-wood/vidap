var trace1 = {
  x: [0, 1, 2, 3, 4],
  y: [1, 5, 3, 7, 5],
  mode: 'lines+markers',
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: [4, 0, 4, 6, 8],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = [trace1, trace2];

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

var x = [];
for (var i = 0; i < 500; i ++) {
  x[i] = Math.random();
}

var trace = {
    x: x,
    type: 'histogram',
  };
var data = [trace1, trace2, trace];

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
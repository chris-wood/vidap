// Generate some random salary data
var salaryCount = 500;
var totalSalary = 0;
var salaryValues = [];
var maxSalary = 0;
for (var i = 0; i < salaryCount; i ++) {
  salaryValues[i] = (Math.random() * 100000) + 25000;
  totalSalary = totalSalary + salaryValues[i];
  if (salaryValues[i] > maxSalary) {
    maxSalary = salaryValues[i];
  }
}
var averageSalary = totalSalary / salaryCount;

// Create histogram trace
var salaryHistogram = {
  x: salaryValues,
  type: 'histogram',
  name: "Salary",
};

// Create trace that plots the average salary line
var salaryQuery = {
  type: 'scatter',
  x: [averageSalary, averageSalary],
  y: [0, maxSalary],
  name: "Average Salary",
  line: {
    // color: 'blue',
    dash: 'dot',
    width: 2,
  }
};

var data = [salaryHistogram, salaryQuery];

var batchSizes = [];
for (var i = 1; i < salaryCount+1; i ++) {
  batchSizes[i] = {
    label: "" + i,
    method: 'restyle',
    args: [],
  };
}
console.log(batchSizes)

Plotly.react('vidapPlot', data, {
  sliders: [
  {
    pad: {
      t: 20
    },
    currentvalue: {
      xanchor: 'left',
      prefix: 'Batch Size: ',
      font: {
        color: '#888',
        size: 12
      }
    },
    steps: batchSizes
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
        size: 12
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
    }]
  },
  ]
}, {
  // staticPlot: true,
});

// function randomize() {
//   Plotly.animate('vidapPlot', {
//     data: [{y: [Math.random(), Math.random(), Math.random()]}],
//     traces: [0],
//     layout: {}
//   }, {
//     transition: {
//       duration: 500,
//       easing: 'cubic-in-out'
//     },
//     frame: {
//       duration: 500
//     }
//   })
// }

var contexts = [
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average in a privacy-preserving way.",
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average such that you cannot learn any one individual’s salary contribution.",
  "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
  "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
];
var randomContext = contexts[Math.floor(Math.random()*contexts.length)];
document.getElementById('contextSetup').innerHTML = randomContext;

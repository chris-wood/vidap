// Generate some random salary data
// XXX(caw): fetch this from an API or read it from a CSV file locally
var salaryCount = 500;
var totalSalary = 0;
var salaryValues = [];
var maxCount = 30;
for (var i = 0; i < salaryCount; i ++) {
  salaryValues[i] = (Math.random() * 100000) + 25000;
  totalSalary = totalSalary + salaryValues[i];
}
var averageSalary = totalSalary / salaryCount;

// XXX(caw): add and then update a panel which provides basic statistics about the underlying data, and toggle whether or not it's displayed
document.getElementById('batchSizeSelector').max = salaryCount;

// Create histogram trace
var salaryHistogram = {
  type: 'histogram',
  x: salaryValues,
  name: "Salary",
};

// Create trace that plots the average salary line
var salaryQuery = {
  type: 'scatter',
  x: [averageSalary, averageSalary],
  y: [0, maxCount],
  name: "Average Salary",
  line: {
    color: 'blue',
    dash: 'dot',
    width: 2,
  }
};

// var trace1 = {
//   x: [0, 1, 2, 3, 4, 5],
//   y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
//   type: 'scatter'
// };
// var trace2 = {
//   x: [0, 1, 2, 3, 4, 5],
//   y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
//   type: 'bar'
// };
// var data = [trace1, trace2];

var dataShowing = true;
var data = [salaryQuery, salaryHistogram];
Plotly.react('vidapPlot', data, {}, {
  staticPlot: false,
});

var mode = Math.random() < 0.5;

function distToggle() {
  if (dataShowing) {
    dataShowing = false;
    var data = [salaryQuery];
    Plotly.react('vidapPlot', data, {}, {
      staticPlot: false,
    });
  } else {
    dataShowing = true;
    var data = [salaryQuery, salaryHistogram];
    Plotly.react('vidapPlot', data, {}, {
      staticPlot: false,
    });
  }
}

function computeAverage() {
  var batchSize = document.getElementById('batchSizeSelector').value;
  var batch = [];
  var totalSalary = 0;

  // XXX(caw): need to make sure we don't re-sample the same values
  // var selected = [];
  for (var i = 0; i < batchSize; i++) {
    var randomValue = salaryValues[Math.floor(Math.random()*salaryValues.length)];
    batch[i] = randomValue;
    totalSalary = totalSalary + randomValue;
  }
  var queryAverage = totalSalary / batchSize;

  if (mode) {
    Plotly.animate('vidapPlot', {
      data: [{
        x: [queryAverage, queryAverage],
        y: [0, maxCount],
      }],
      traces: [0],
      layout: {}
    }, {
      transition: {
        duration: 500,
        easing: 'cubic-in-out'
      },
      frame: {
        duration: 500
      }
    })
  } else {
    Plotly.addTraces('vidapPlot', {
      type: 'scatter',
      x: [queryAverage, queryAverage],
      y: [0, maxCount],
      showlegend: false,
      line: {
        color: 'blue',
        dash: 'dot',
        width: 2,
      }
    })
  }
}

var contexts = [
  // "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average in a privacy-preserving way.",
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average such that you cannot learn any one individual’s salary contribution.",
  // "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
  // "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
];
var randomContext = contexts[Math.floor(Math.random()*contexts.length)];
document.getElementById('contextSetup').innerHTML = randomContext;

// Batch size visualizer
const batchValue = document.querySelector("#batchSizeValue")
const batchInput = document.querySelector("#batchSizeSelector")
batchValue.textContent = batchInput.value
batchInput.addEventListener("input", (event) => {
  batchValue.textContent = event.target.value
})
function sizeToggle() {
  $("#batchSizeView").toggleClass('d-none');
}

// Noise visualizer
const noiseValue = document.querySelector("#noiseValue")
const noiseInput = document.querySelector("#noiseSelector")
noiseValue.textContent = noiseInput.value
noiseInput.addEventListener("input", (event) => {
  noiseValue.textContent = event.target.value
})
function noiseToggle() {
  $("#noiseView").toggleClass('d-none');
}

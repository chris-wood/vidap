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

document.getElementById('batchSizeSelector').max = salaryCount;

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
    color: 'orange',
    dash: 'dot',
    width: 2,
  }
};

var data = [salaryHistogram, salaryQuery];
Plotly.react('vidapPlot', data, {}, {
  staticPlot: false,
});

function computeAverage() {
  var batchSize = document.getElementById('batchSizeSelector').value;
  var batch = [];
  // var selected = [];
  var totalSalary = 0;
  for (var i = 0; i < batchSize; i++) {
    var randomValue = salaryValues[Math.floor(Math.random()*salaryValues.length)];
    batch[i] = randomValue;
    totalSalary = totalSalary + randomValue;
  }
  var queryAverage = totalSalary / batchSize;

  Plotly.animate('vidapPlot', {
    data: [{
      x: [queryAverage, queryAverage],
      y: [0, maxSalary],
    }],
    traces: [1],
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
}

var contexts = [
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average in a privacy-preserving way.",
  "Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average such that you cannot learn any one individual’s salary contribution.",
  "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
  "Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.",
];
var randomContext = contexts[Math.floor(Math.random()*contexts.length)];
document.getElementById('contextSetup').innerHTML = randomContext;

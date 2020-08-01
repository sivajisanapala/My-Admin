"use strict";
$(document).ready(function () {

// chart1
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["oct", "nov", "dec", "jan","feb","mar"],
      datasets: [
        {
          label: 0,
          backgroundColor: "#1ac57e",
          data: [133,221,783,478,221,783]
        }, {
          label: 0,
          backgroundColor: "#5723be",
          data: [408,547,675,734,408,547]
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
        barRoundness: 10,
        scales: {
          xAxes: [{
              barThickness: 7,  // number (pixels) or 'flex'
              maxBarThickness: 4, // number (pixels)
              categoryPercentage: 0.25,
              gridLines: {
                display: false,
                drawBorder: false
              }
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false
            }
          }] 
      },
      
      title: {
        display: false,
        text: 'Population growth (millions)'
      }
    }
});

// chart2
    new Chart(document.getElementById("doughnut-chart1"), {
        type: 'doughnut',
        data: {
          labels: ["Inpatient", "OutPatient"],
          
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#5723be", "#1ac57e"],
              data: [70,30]
            }
          ]
        },
        
        options: {
            cutoutPercentage: 80,
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                usePointStyle: true,
                  fontColor: 'rgb(0, 0, 0)'
              }
          }
        }
    });
    // chart3
    new Chart(document.getElementById("doughnut-chart2"), {
        type: 'doughnut',
        data: {
          labels: ["Male", "Female"],
          
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#5723be", "#e05d21"],
              data: [65,45]
            }
          ]
        },
        
        options: {
            cutoutPercentage: 80,
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                usePointStyle: true,
                  fontColor: 'rgb(0, 0, 0)'
              }
          }
        }
    });
    // chart3
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [7,8,9,10,11,12,1,2,3],
          datasets: [{ 
              data: [30,70,40,80,50,90,60,100,70,120],
              label: "false",
              borderColor: "#e05d21",
              fill: false
            }
          ]
        },
        options: {
          scales: {
          xAxes: [{
              barThickness: 7,  // number (pixels) or 'flex'
              maxBarThickness: 4, // number (pixels)
              categoryPercentage: 0.25,
              gridLines: {
                display: false,
                drawBorder: false
              }
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false
            }
          }] 
      },
            legend: {
                display: false
            }
          }
      });

      // chart4
    new Chart(document.getElementById("line-chart2"), {
      type: 'line',
      data: {
        labels: [14,15,16,17,18,19],
        datasets: [{ 
            data: [30,70,40,80,30,60],
            label: "false",
            borderColor: "#ffffff",
            fill: false
          }
        ]
      },
      options: {
        scaleLineColor: 'transparent',
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: "transparent", // this here
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: "#CCC", // this here
            },
          }],
        },
          legend: {
              display: false
          }
        }
    });

});


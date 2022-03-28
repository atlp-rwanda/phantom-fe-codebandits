import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
Chart.register(...registerables);

export const MainPageGraph = () => {
  const myChart = {
    data: {
      labels: ['KBS', 'Royal express', 'RFTC', 'Virunga express', 'Codebandits'],
      datasets: [
        {
          label: 'Number of buses by operator',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      font: {
        family: 'Lexend'
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'Lexend',
              weight: 'bolder'
            }
          }
        }
      },
      animation: {
        duration: 3000
      },
      layout: {
        padding: 20
      }
    }
  };

  return (
    <div className="bg-background text-black font-bold font-raleway h-[400px] w-full mb-5">
      <Bar data={myChart.data} options={myChart.options} />
    </div>
  );
};

export const DetailPane = () => {
  return (
    <div className=" w-[99%] z-10 mx-auto h-full md:h-[150px] rounded-md mt-[-5px] px-4 py-2 flex flex-col md:grid md:grid-cols-4 md:gap-3">
      <div className="h-full w-full bg-background flex flex-col items-center justify-center shadow-main mb-2">
        <h2 className="text-4xl font-semibold font-raleway mb-1">50</h2>
        <p className="text-2xl">Buses</p>
      </div>
      <div className="h-full w-full bg-background flex flex-col items-center justify-center shadow-main mb-2">
        <h2 className="text-4xl font-semibold font-raleway mb-1">20</h2>
        <p className="text-2xl">Routes</p>
      </div>
      <div className="h-full w-full bg-background flex flex-col items-center justify-center shadow-main mb-2">
        <h2 className="text-4xl font-semibold font-raleway mb-1">55</h2>
        <p className="text-2xl">Drivers</p>
      </div>
      <div className="h-full w-full bg-background flex flex-col items-center justify-center shadow-main mb-2">
        <h2 className="text-4xl font-semibold font-raleway mb-1">5</h2>
        <p className="text-2xl">Operators</p>
      </div>
    </div>
  );
};

export const MainPage = () => {
  return (
    <div>
      <MainPageGraph />
      <DetailPane />
    </div>
  );
};

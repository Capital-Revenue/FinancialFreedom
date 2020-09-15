import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { GlobalContext } from "../context/GlobalState";

function BudgetChart() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.value);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc =+ item), 0)
  .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc =+ item), 0) * -1
    ).toFixed(2);

    const charts = {
        optionsBar: {
        chart: {
          stacked: false,
          stackType: "100%",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ["Total Budget"],
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100]
          }
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right"
        }
      },
      seriesBar: [
        {
          name: "Income",
          data: [income]
        },
        {
          name: "Expenses",
          data: [expense]
        },
        {
          name: "Total Leftover",
          data: [total]
        }
      ]
    };
    return (
      <div className="app">
        <div className="row">
          <div className="col percentage-chart">
            <Chart
              options={charts.optionsBar}
              height={140}
              series={charts.seriesBar}
              type="bar"
              width={500}
            />
          </div>
        </div>
      </div>
    );
  }

export default BudgetChart;
import Chart from "react-apexcharts";

export default function Grafico() {
  const bar = {
    options: {
      chart: {
        height: 400,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            borderRadius: 15,
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val + "%";
        },
        offsetY: -30,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        max: function (maiorValor: number) {
          return Math.ceil(maiorValor / 10) * 10 + 5;
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val: number) {
            return val + "%";
          },
        },
      },
    },
    series: [
      {
        name: "Operadora",
        data: [10, 32, 8, 12, 20, 18],
        color: "#0156cc",
        opacity: 0.5,
      },
      {
        name: "Corretora",
        data: [8, 12, 5, 10, 15, 12],
        color: "#1a3f7d",
      },
    ],
  };

  return (
    <div>
      <Chart
        options={bar.options}
        series={bar.series}
        type="bar"
        width="100%"
        height={400}
      />
    </div>
  );
}

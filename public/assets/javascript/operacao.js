const value = 75;
const max = 100;
let color = "#ff9b00";

const opcoesPontuacao = {
  chart: {
    type: "radialBar",
    height: 250,
    fontFamily: "Open Sans",
  },
  series: [(value / max) * 100],
  colors: [color],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "20%",
        margin: 5,
        background: "transparent",
      },
      track: {
        background: "#d3d3d3",
        strokeWidth: "100%",
      },
      dataLabels: {
        show: true,
        name: { show: false },
        value: {
          show: true,
          fontSize: "24px",
          fontWeight: "bold",
          color: "#331477",
          offsetY: 8,

          formatter: function () {
            return `${value}/${max}`;
          },
        },
      },
    },
  },
  stroke: {
    lineCap: "butt",
  },
};

const chartPontuacao = new ApexCharts(
  document.querySelector("#pontuacao"),
  opcoesPontuacao,
);
chartPontuacao.render();

const opcoesTendencia = {
  chart: {
    type: "line",
    height: 80,
    sparkline: {
      enabled: true,
    },
    animations: { enabled: true },
  },
  series: [
    {
      data: [10, 20, 15, 30, 25, 40],
    },
  ],
  colors: [color],
  stroke: {
    curve: "smooth",
    width: 2,
  },
  markers: {
    size: 0,
  },
  tooltip: {
    enabled: false,
  },
};

const chartTendencia = new ApexCharts(
  document.querySelector("#tendencia-pontuacao-chart"),
  opcoesTendencia,
);
chartTendencia.render();

// ----------------------------------------------------------------
const opcoes = {
  chart: {
    type: "area",
    height: 350,
    fontFamily: "'Open Sans', sans-serif",
    toolbar: { show: false },
  },

  series: [
    {
      name: "Disponibilidade",
      type: "area",
      data: [
        { x: "6 abr", y: 94 },
        { x: "9 abr", y: 88 },
        { x: "12 abr", y: 82 },
        { x: "15 abr", y: 76 },
        { x: "18 abr", y: 69 },
        { x: "21 abr", y: 75 },
        { x: "24 abr", y: 70 },
        { x: "27 abr", y: 65 },
        { x: "30 abr", y: 49 },
        { x: "3 mai", y: 44 },
        { x: "6 mai", y: 39 },
      ],
    },
    {
      name: "Projeção",
      type: "line",
      data: [
        { x: "6 mai", y: 41 },
        { x: "9 mai", y: 32 },
        { x: "12 mai", y: 28 },
      ],
    },
  ],

  colors: ["#6d33ff", "#6d33ff"],

  stroke: {
    curve: "smooth",
    width: [3, 3],
    dashArray: [0, 5],
  },

  fill: {
    type: "solid",
    opacity: [0.15, 0],
  },

  title: {
    text: "Evolução e Projeção da Disponibilidade",
    align: "left",
    margin: 20,
    offsetX: 10,
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#111111",
    },
  },

  annotations: {
    yaxis: [
      {
        y: 94,
        borderColor: "#ff3333",
        strokeDashArray: 4,
        borderWidth: 1.5,
        label: {
          text: "Meta (94%)",
          align: "right",
          style: {
            color: "#fff",
            background: "#ff3333",
            fontFamily: "'Poppins', sans-serif",
          },
        },
      },
    ],
  },

  xaxis: {
    type: "category",
    labels: { style: { colors: "#666666" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 20,
    max: 100,
    labels: {
      style: { colors: "#666666" },
      formatter: (value) => value + "%",
    },
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
};

const chart = new ApexCharts(
  document.querySelector("#disponibilidade"),
  opcoes,
);
chart.render();

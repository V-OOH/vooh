// Pontuação - Donut
const ctx = document.getElementById("pontuacao");
const value = 75;
const max = 100;
let color = "#ff9b00";
new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: [color, "#d3d3d3"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [
    {
      id: "centerText",
      beforeDraw(chart) {
        const { width, height, ctx } = chart;

        ctx.restore();

        const fontSize = (height / 6).toFixed(2);
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillStyle = "#331477";

        const text = `${value}/${max}`;

        ctx.fillText(text, width / 2, height / 2);

        ctx.save();
      },
    },
  ],
});

// Tendência da pontuação
const ctx2 = document.getElementById("tendencia-pontuacao-chart");
new Chart(ctx2, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        data: [10, 20, 15, 30, 25, 40],
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
});

// ----------------------------------------------------------------

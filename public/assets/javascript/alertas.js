// Gráfico de Linhas
const ctx = document.getElementById('graficoLine').getContext('2d');
const graficoLine = new Chart(ctx, {
  type: 'line', // Tipo do gráfico
  data: {
    labels: ['Abr 10', 'Abr 11', 'Abr 12', 'Abr 13', 'Abr 14', 'Abr 15'],
    datasets: [{
      label: 'Quantidade de Alertas',
      data: [1, 5, 5, 12, 8, 1],
      borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de preenchimento
      borderWidth: 2,
      tension: 0.3 // Suavidade da linha
    }, {
      label: 'Limite',
      data: [10, 10, 10, 10, 10, 10],
      borderColor: 'red',
      borderDash: [5, 5],
      pointRadius: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Volume de Alertas'
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Gráfico de Barra Dupla
const bar_duo = document.getElementById('grafico-bar-duo').getContext('2d');
const graficobarduo = new Chart(bar_duo, {
  type: 'bar', // Define o tipo como barras
  data: {
    labels: ['Abr 10', 'Abr 11', 'Abr 12', 'Abr 13', 'Abr 14', 'Abr 15'],
    datasets: [{
      title: 'Volume de Alertas',
      label: 'Atenção',
      data: [1, 3, 2, 7, 2, 0],
      backgroundColor: 'rgba(235, 169, 54, 0.99)', 
      borderColor: 'rgba(235, 169, 54, 0.99)',
      borderWidth: 1
    },
    {
      label: 'crítico',
      data: [0, 2, 3, 5, 6, 1],
      backgroundColor: 'rgba(255, 99, 99, 0.7)', // Cor da segunda barra
      borderColor: 'rgba(255, 99, 99, 0.7)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Distribuição por Nível'
      },
    },

     scales: {
            x: {
                stacked: true // Habilita o empilhamento no eixo X
            },
            y: {
                stacked: true // Habilita o empilhamento no eixo Y
            }
        }

  }
});


// Gráfico de Barras

const bar = document.getElementById('grafico-bar').getContext('2d');
const graficobar = new Chart(bar, {
  type: 'bar', // Define o tipo como barras
  data: {
    labels: ['CPU', 'Disco', 'Memória  RAM', 'Rede'],
    datasets: [{
      title: 'Distribuição por Causa Raiz',
      label: 'Atenção',
      data: [10, 5, 15, 2],
      backgroundColor: 'rgb(109, 51, 255)', 
      borderColor: 'rgb(109, 51, 255);',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Distribuição por Nível'
      },
    },

    scales: {
      y: {
        beginAtZero: true
      }
    }

  }
});


// Gráfico de Roscas

const rosca = document.getElementById('grafico-rosca').getContext('2d');
const meuGrafico = new Chart(rosca, {
    type: 'doughnut', // Define que é um gráfico de rosca
    data: {
        labels: ['Presencial', 'Online'],  
        datasets: [{
            label: '%',
            data: [40 , 60],
            backgroundColor: [
                'rgb(84, 145, 199)',
                'rgb(143, 155, 176)'
            ],
            borderColor: [
                'rgb(84, 145, 199)',
                'rgb(143, 155, 176)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        cutout: '70%', // AQUI: Define o tamanho do buraco (percentual do raio)
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Modo de Intervenção'
            }
        }
    }
});

// Gráfico de Barras Vertical

const bar_vertical = document.getElementById('grafico-bar-vertical').getContext('2d');
const graficobarvertical = new Chart(bar_vertical, {
  type: 'bar', // Define o tipo como barras
  data: {
    labels: ['S012', 'L010', 'N010', 'OE023', 'S112', 'S011', 'N013', 'L012', 'S002', 'S001'],
    datasets: [{
      title: 'Distribuição por Causa Raiz',
      label: 'Atenção',
      data: [32, 25, 25, 19, 18, 18, 12, 8, 5, 2],
      backgroundColor: 'rgb(109, 51, 255)', 
      borderColor: 'rgb(109, 51, 255);',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Principais Pontos de Atenção'
      },
    },

    scales: {
      y: {
        beginAtZero: true
      }
    }

  }
});

const ctx = document.getElementById('careerChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Career Match Probability (%)',
      data: values, // values are already percentages
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      borderRadius: 10
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e5e7eb'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.raw.toFixed(2) + '%';
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#9ca3af'
        },
        grid: {
          color: 'rgba(255,255,255,0.05)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9ca3af',
          callback: function(value) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(255,255,255,0.05)'
        }
      }
    }
  }
});

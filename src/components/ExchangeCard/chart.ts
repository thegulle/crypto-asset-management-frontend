export const chartOptions = {
  chart: {
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      show: false
    }
  },
  stroke: {
    show: false,
  },
  grid: {
    show: false
  },
  theme: {
    mode: 'dark',
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    title: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  fill: {
    colors: ['#a8a8a833'],
    type: "solid",
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 70, 100]
    }
  },
}
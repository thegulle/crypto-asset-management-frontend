import { isDark } from "@/composables"

export const series = [{
  name: 'Value',
  data: [3200, 3100, 4000, 3500],
}]

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
    colors: '#444951',
    type: "solid",
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 70, 100]
    }
  },
}
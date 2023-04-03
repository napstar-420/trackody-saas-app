import React from 'react';
import Chart from 'react-apexcharts';

const colors = ['#f6f1e9', '#4fc9da'];
const baseColor = '#8f8984';
const labelStyle = {
  colors: baseColor,
  fontFamily: "'Exo 2', sans-serif",
  fontSize: '0.8rem',
};
const gridColor = '#dad3c3';

const options = {
  series: [
    {
      name: 'Order',
      data: [21, 21, 26, 26, 31, 31, 27],
    },
    {
      name: 'Revenue',
      data: [12, 16, 16, 21, 21, 18, 18],
    },
  ],
  chart: {
    fontFamily: 'inherit',
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {},
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'solid',
    opacity: 1,
  },
  stroke: {
    show: false,
    curve: 'smooth',
  },
  xaxis: {
    categories: ['', '06 Sep', '13 Sep', '20 Sep', '27 Sep', '30 Sep', ''],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: labelStyle,
    },
    crosshairs: {
      position: 'front',
      stroke: {
        color: '#999',
        width: 1,
        dashArray: 3,
      },
    },
    tooltip: {
      enabled: false,
      offsetY: 0,
      style: {
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: labelStyle,
    },
  },
  states: {
    normal: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
    hover: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: 'none',
        value: 0,
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$' + val + ' thousands';
      },
    },
  },
  crosshairs: {
    show: true,
    position: 'front',
    stroke: {
      color: '#000',
      width: 1,
      dashArray: 0,
    },
  },
  colors: colors,
  grid: {
    borderColor: gridColor,
    strokeDashArray: 4,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    colors: colors,
    strokeColor: ['#4fc9da', '#f6f1e9'],
    strokeWidth: 3,
  },
};

export function NetworkSummary() {
  const summary = [
    {
      label: 'Clicks',
      value: 8920,
      periods: 14,
      change: -6,
    },
    {
      label: 'Conversions',
      value: 1764,
      periods: 14,
      change: 2,
    },
    {
      label: 'CR',
      value: '19.71%',
      periods: 14,
      change: 9,
    },
    {
      label: 'Revenue',
      value: '$21 545.01',
      periods: 14,
      change: 17,
    },
    {
      label: 'Payout',
      value: '$16 624.59',
      periods: 14,
      change: 29,
    },
    {
      label: 'Profit',
      value: '$4 920.42',
      period: 14,
      change: -9,
    },
    {
      label: 'EPC',
      value: '$0.7233',
      period: 14,
      change: 27,
    },
  ];

  return (
    <div className='bg-[#fdfcfb] border border-dashed py-4 rounded-xl px-8'>
      <h2 className='text-lg text-light_text font-semibold'>Network Summary</h2>
      <div className='py-4 grid grid-cols-4'>
        {summary.map((network, index) => {
          const { label, value, change, period } = network;
          return (
            <div key={index}>
              <h1 className='text-light_800 font-medium'>{label}</h1>
              <h2 className='text-3xl text-light_text font-semibold flex items-center gap-2'>
                {value}{' '}
                <span
                  className={`text-sm ${
                    change > 0 ? 'bg-lime-400' : 'bg-red-500'
                  } text-white px-2 rounded`}
                >
                  {change > 0 ? `+${change}` : change}
                </span>
              </h2>
              <h3 className='text-sm text-light_600 font-medium'>
                Last {period} Days
              </h3>
              <Chart
                options={options}
                type='area'
                series={options.series}
                width='100%'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

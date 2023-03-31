import React from 'react';
import Chart from 'react-apexcharts';

export default function PerformanceOverview() {
  const bubbleColors = ['#4fc9da', '#b8d935', '#e8c444', '#f06445', '#4f55da'];
  const options = {
    legend: {
      position: 'bottom',
      offsetY: 30,
      fontFamily: 'Exo 2, sans-serif',
      fontSize: '14px',
      fontWeight: 600,
      padding: 12,
      horizontalAlign: 'left',
      markers: {
        offsetX: -5,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 16,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      labels: {
        colors: '#8f8984',
        useSeriesColors: false,
      },
    },
    colors: bubbleColors,
    chart: {
      type: 'bubble',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      show: true,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: '#dad3c3',
      borderWidth: 2,
    },
    xaxis: {
      max: 700,
      min: 0,
      tickAmount: 7,
      tickPlacement: 'off',
      axisBorder: {
        show: false,
      },
      type: 'category',
      labels: {
        style: {
          colors: '#8f8984',
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.9rem',
        },
      },
    },
    yaxis: {
      max: 700,
      min: 0,
      tickAmount: 7,
      labels: {
        style: {
          colors: '#8f8984',
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.9rem',
        },
      },
    },
  };
  const series = [
    {
      name: 'Social Campaigns',
      data: [[125, 300, 40]],
    },
    {
      name: 'Email newsletter',
      data: [[250, 350, 35]],
    },
    {
      name: 'TV Campaign',
      data: [[350, 450, 30]],
    },
    {
      name: 'Google Ads',
      data: [[450, 250, 25]],
    },
    {
      name: 'Courses',
      data: [[500, 500, 32]],
    },
    {
      name: 'Radio',
      data: [[600, 250, 28]],
    },
  ];

  return (
    <div className='bg-[#fdfcfb] border border-dashed py-4 rounded-xl'>
      <div className='flex justify-between items-center px-8'>
        <div>
          <h2 className='text-lg text-light_text font-semibold'>
            Performance Overview
          </h2>
          <p className='text-light_800 text-sm'>Users from all channels</p>
        </div>
        <div className='flex gap-1'>
          <button className='text-light_800 px-4 py-2 rounded-xl text-sm'>
            Month
          </button>
          <button className='text-light_800 px-4 py-2 rounded-xl bg-light_800 bg-opacity-[0.05] text-sm'>
            Week
          </button>
        </div>
      </div>
      <div className='py-6 px-8'>
        <div className='flex items-center gap-1'>
          <span className='text-light_600 text-2xl font-medium self-start mt-1'>
            $
          </span>
          <span className='text-4xl font-semibold text-light_text'>8.55</span>
          <span className='ml-1 px-2 rounded-lg text-sm bg-lime-50 font-medium text-lime-500'>
            ^2.2%
          </span>
        </div>
        <p className='text-light_600 font-medium'>
          Average cost per interaction
        </p>
      </div>
      <div className='text-4xl text-center pb-4 text-light_800 px-3'>
        <Chart options={options} series={series} type='bubble' width={'100%'} />
      </div>
    </div>
  );
}

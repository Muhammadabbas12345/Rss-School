"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#FF6F61"], // Updated colors to match the chart (blue and red)
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [2, 2],
    curve: "smooth", // Changed to smooth to match the wavy chart style
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3C50E0", "#FF6F61"],
    strokeWidth: 3,
    fillOpacity: 1,
    hover: {
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06"], // Updated weeks to match the chart
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 160000, // Minimum y-axis value (160k)
    max: 560000, // Maximum y-axis value (560k)
  },
};

const ChartOne: React.FC = () => {
  const series = [
    {
      name: "This Week",
      data: [320000, 260000, 350000, 230000, 480000, 290000], // Updated data points for 'This Week'
    },
    {
      name: "Last Week",
      data: [480000, 360000, 460000, 250000, 540000, 340000], // Updated data points for 'Last Week'
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap justify-between sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-bold text-black text-2xl dark:text-white">School Performance</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;

"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
// import UnpaidStudent from "../Tables/UnpaidStudent";
import CardDataStats from "../CardDataStats";

const TeachersDetail = dynamic(() => import("@/components/TeachersDetail/TeachersDetail"), {
  ssr: false,
});

const Calender = dynamic(() => import("@/components/Charts/Calender"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
  <CardDataStats title="Students" total="932" rate="" levelUp={false}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 fill-[#6C63FF]" // Purple color for students
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 14l-8-4l8-4l8 4l-8 4z" />
      <path d="M12 14v7" />
      <path d="M5.33 17l2.67 1.34V11.66L5.33 13z" />
      <path d="M18.67 17L16 15.66V11.66l2.67 1.34z" />
    </svg>
  </CardDataStats>

  <CardDataStats title="Teachers" total="754" rate="" levelUp={false}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 fill-[#FF6F61]" // Orange color for teachers
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  </CardDataStats>

  <CardDataStats title="Events" total="40" rate="" levelUp={false}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 fill-[#FFC107]" // Yellow color for events
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  </CardDataStats>

  <CardDataStats title="Foods" total="32k" rate="" levelUp={false}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 fill-[#2D3A8C]" // Dark blue color for foods
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 2H4v20h16V2zM8 6v6" />
      <path d="M16 6v6" />
      <path d="M12 6v6" />
    </svg>
  </CardDataStats>
</div>


      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <Calender />
        <TeachersDetail />
        <div className="col-span-24 xl:col-span-12">
       
        </div>
      </div>
    </>
  );
};

export default ECommerce;

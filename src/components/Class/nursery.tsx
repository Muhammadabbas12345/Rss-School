// pages/index.tsx

import StudentResults from "../Tables/ResultTable";

const studentsData = [
  { id: 1, rollNumber: 101, name: "Alice", totalmarks: 100, obtainmarks: 75 },
  { id: 2, rollNumber: 102, name: "Bob", totalmarks: 100, obtainmarks: 95 },
  { id: 3, rollNumber: 103, name: "John", totalmarks: 100, obtainmarks: 30 },
  { id: 4, rollNumber: 104, name: "Zeeshan", totalmarks: 100, obtainmarks: 35 },
  // Add more students as needed
];

const Nursery: React.FC = () => {
  return (
    <div className="container mx-auto p-4 dark:bg-boxdark-2 dark:text-bodydark">
      <StudentResults students={studentsData} classTitle={"Nursery"} />
    </div>
  );
};

export default Nursery;

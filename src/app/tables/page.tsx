// pages/index.tsx

import Nursery from "@/components/Class/nursery";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <h1 className="text-2xl font-bold mb-4">Class Results</h1>
    <Nursery/>
    </DefaultLayout>
  );
};

export default Home;

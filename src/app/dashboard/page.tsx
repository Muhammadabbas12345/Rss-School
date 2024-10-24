import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from '../../components/Dashboard/Dashboard';


export const metadata: Metadata = {
  title:
    "Rss | School",
  description: "This is Rss-Schhol Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
      <Dashboard/>
      </DefaultLayout>
    </>
  );
}

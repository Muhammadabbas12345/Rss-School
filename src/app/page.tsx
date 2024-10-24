
import Homes from "@/components/Home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Rss | School",
  description: "This is Rss-Schhol Dashboard",
};

export default function Home() {
  return (
    <>
    <Homes/>
    </>
  );
}

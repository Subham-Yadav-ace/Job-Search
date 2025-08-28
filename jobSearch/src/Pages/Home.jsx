import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Recommended_jobs from "../Components/Recommended_jobs";
import Top_company from "../Components/Top_company";
import Footer from "../Components/Footer";
import Featured_jobs from "../Components/Featured_jobs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Why_customers from "../Components/Why_customer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recommended_jobs />
      <Top_company />
      <Featured_jobs />
      <Why_customers />
      <Footer />
    </div>
  );
}

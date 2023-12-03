import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/sections/Welcome";
import Features from "@/components/sections/Features";
import Explore from "@/components/sections/Explore";
import Integrations from "@/components/sections/Integrations";
import Faq from "@/components/sections/Faq";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Community from "@/components/sections/Community";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Manage Wise Clone</title>
      </Head>
      <Navbar />
      <Welcome />
      <Features />
      <div className="my-16 bg-primary1">
        <Explore />
        <Integrations />
      </div>
      <Faq />
      <Pricing />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
}

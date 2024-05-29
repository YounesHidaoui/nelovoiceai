import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Index from "@/components/faq";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nelovoice",
  description: "We're a team of 3 that are passionate about making voice technology more accessible and affordable for everyone. We're always looking for feedback and ways to improve our product. If you have any ideas or suggestions, please get in touch with us.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      <Index/>
      <Blog />
      <Contact />
    </>
  );
}

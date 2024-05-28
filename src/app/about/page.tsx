import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";


import Team from "@/components/About/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Our team is here to build top-notch voice AI for businesses. We focus on making communication easier and more efficient. At Nelovoice, we’re committed to creating the easiest AI voice builder, with small businesses in mind. Our goal is to help companies succeed with our technology. We believe that every business deserves great AI assistance that works 24/7. "
      />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Team/>
    </>
  );
};

export default AboutPage;

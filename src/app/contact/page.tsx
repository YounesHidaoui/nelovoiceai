import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We'd love to hear from you! Whether you're interested in learning more about the NELOVOICE, exploring custom features for your business, or discussing investment opportunities, our team is here to connect with you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

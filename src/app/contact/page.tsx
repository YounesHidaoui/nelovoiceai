import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NELOVOICE",
  description: "We'd love to hear from you! Whether you're interested in learning more about the NELOVOICE, exploring custom features for your business, or discussing investment opportunities, our team is here to connect with you.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact us"
        description="We'd love to hear from you! Whether you're interested in learning more about the NELOVOICE, exploring custom features for your business, or discussing investment opportunities, our team is here to connect with you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Essential Plan            "
            price={isMonthly ? "39" : "400"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Perfect for small businesses starting out with AI communication."
          >
            <OfferList text="Local phone number setup" status="active" />
            <OfferList text="Basic call routing" status="active" />
            <OfferList text="Message taking" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Appointment scheduling" status="inactive" />
            <OfferList text="Up to 1,000 minutes per month" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Professional Plan"
            price={isMonthly ? "99" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ideal for growing businesses needing advanced features."
          >
            <OfferList text="Everything in Basic Plan" status="active" />
            <OfferList text="Integration with Google Voice" status="active" />
            <OfferList text="Advanced call routing by name" status="active" />
            <OfferList text="Priority email and phone support" status="active" />
            <OfferList text="Up to 10,000 minutes per month" status="active" />
            <OfferList text="Automated lead qualification" status="active" />
            <OfferList text="SMS notifications" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise Plan"
            price={isMonthly ? "120" : "1000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Designed for large businesses requiring extensive AI capabilities."
          >
            <OfferList text="Everything in Professional Plan" status="active" />
            <OfferList text="Multilingual support (100+ languages)" status="active" />
            <OfferList text="On-premises deployment options" status="active" />
            <OfferList text="Private internet backbone for reduced latency" status="active" />
            <OfferList text="High scalability (1M+ concurrent calls)" status="active" />
            <OfferList text="Custom integrations and API access" status="active" />
            <OfferList text="Dedicated account manager" status="active" />
            <OfferList text="24/7 premium support" status="active" />

          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

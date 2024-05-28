import React from 'react';
import Image from "next/image";

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Privacy Policy
                </h1>
                <p className="text-right text-sm mb-2">Last Updated: 21/05/2024</p>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  HBS Management, owner of NELOVOICE, a Moroccan company based in Marrakech, is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share personal information from visitors to our website and users of our services.
                </p>
                <div className="mb-10 w-full overflow-hidden rounded">

                </div>
                <div className="mb-10">
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Information We Collect
                  </h2>
                  <ul className="list-disc pl-5 mb-6">
                    <li>Personal Information: Name, email address, phone number, and any information you provide when interacting with NELOVOICE.</li>
                    <li>Financial Information: Processed by our payment processor; we do not store payment card information.</li>
                    <li>Communication Information: Information from your interactions with our support team or participation in surveys.</li>
                    <li>Usage Information: Data on how you interact with our services, including cookies and analytics.</li>
                  </ul>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-5 mb-6">
                    <li>Service Delivery: To provide and manage our AI phone agent services.</li>
                    <li>Improvement: To enhance our services and user experience.</li>
                    <li>Communication: To send updates, newsletters, and respond to inquiries.</li>
                    <li>Security: To protect against fraud and ensure the security of our services.</li>
                    <li>Legal Compliance: To comply with legal obligations and protect our rights.</li>
                  </ul>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Sharing Your Information
                  </h2>
                  <ul className="list-disc pl-5 mb-6">
                    <li>Service Providers: With companies that assist in providing our services, under confidentiality agreements.</li>
                    <li>Legal Requirements: If required by law or to protect our rights.</li>
                    <li>Business Transfers: In case of a merger, acquisition, or sale of assets.</li>
                    <li>With Your Consent: When you agree to share your information with third parties.</li>
                  </ul>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Cookies and Tracking
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We use cookies to enhance your experience on our site. You can control cookie settings through your browser. We also use analytics tools to understand how you use our site.
                  </p>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Data Security
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We implement measures to protect your data, but no system is completely secure. Use caution when sharing information online.
                  </p>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    International Users
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    By using our services, you consent to the transfer of your information to Morocco and other locations where we operate.
                  </p>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Changes to This Policy
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may update this Privacy Policy. The "Last Updated" date will reflect the latest changes. Continued use of our services indicates acceptance of the updated policy.
                  </p>
                  <h2 className="font-xl mb-6 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Contact Us
                  </h2>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you have any questions or comments, please contact us at contact@nelovoice.com.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    For further details, visit our website at nelovoice.com or contact our support team. Your privacy is important to us, and we are committed to safeguarding your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

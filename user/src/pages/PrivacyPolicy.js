import React from "react";
import { useData } from "../context/data";
import Layout from "../components/layout/Layout";

const PrivacyPolicy = () => {
  const { companyName } = useData();

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100 p-8">
        <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
            <p className="text-center mt-2">
              Your privacy is important to us at {companyName}.
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              1. Introduction
            </h2>
            <p className="mb-4">
              This Privacy Policy outlines how {companyName} collects, uses, and
              protects your information when you visit our website or use our
              services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information such as your name, email
              address, phone number, and payment details when you make a
              reservation or contact us.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              Your information is used to:
              <ul className="list-disc list-inside mt-2">
                <li>Process your reservations and payments.</li>
                <li>Communicate with you about your rentals.</li>
                <li>Improve our services and customer experience.</li>
                <li>
                  Send promotional offers and updates (you can opt-out at any
                  time).
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              5. Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties.
              We may share your information with trusted partners who assist us
              in providing our services, but only under strict confidentiality
              agreements.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to enhance user experience. You can
              choose to accept or decline cookies. Declining cookies may prevent
              you from taking full advantage of the website.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              7. Third-Party Links
            </h2>
            <p className="mb-4">
              Our website may contain links to third-party sites. We are not
              responsible for the content or privacy practices of these sites.
              We encourage you to review their privacy policies before providing
              any personal information.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              {companyName} reserves the right to update this Privacy Policy at
              any time. Changes will be effective immediately upon posting on
              this website. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at support@{companyName.toLowerCase()}.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

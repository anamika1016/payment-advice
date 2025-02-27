import React from "react";
import Layout from "../components/layout/Layout";
import { useData } from "../context/data";

const TermsAndConditions = () => {
  const { companyName } = useData();

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100 p-8">
        <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-4xl font-bold text-center">
              Terms and Conditions
            </h1>
            <p className="text-center mt-2">
              Welcome to {companyName}! Please read our terms carefully.
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              1. Introduction
            </h2>
            <p className="mb-4">
              By accessing this website, you agree to be bound by these Terms
              and Conditions and our Privacy Policy. If you do not agree, please
              do not use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              2. Rental Agreement
            </h2>
            <p className="mb-4">
              All car rentals are subject to a rental agreement, which must be
              signed before the vehicle is released. The terms of the rental
              agreement will be provided at the time of rental.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Eligibility</h2>
            <p className="mb-4">
              You must be at least 21 years of age to rent a vehicle. A valid
              driver's license and a credit card in your name are required.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Vehicle Use</h2>
            <p className="mb-4">
              The vehicle must be driven only by authorized drivers as per the
              rental agreement. Any damage caused by unauthorized use will be
              the responsibility of the renter.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              5. Fees and Charges
            </h2>
            <p className="mb-4">
              Additional fees may apply for late returns, extra mileage, and
              insurance options. All fees will be clearly outlined in the rental
              agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              6. Cancellation Policy
            </h2>
            <p className="mb-4">
              Cancellations made 48 hours before the rental will incur no
              charge. Cancellations made within 48 hours will be subject to a
              fee.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              7. Governing Law
            </h2>
            <p className="mb-4">
              These Terms and Conditions are governed by the laws of the country
              in which {companyName} operates. Any disputes will be settled in
              the appropriate courts.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              8. Changes to Terms
            </h2>
            <p className="mb-4">
              {companyName} reserves the right to modify these Terms and
              Conditions at any time. Changes will be effective immediately upon
              posting on this website.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact us at support@{companyName.toLowerCase()}.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;

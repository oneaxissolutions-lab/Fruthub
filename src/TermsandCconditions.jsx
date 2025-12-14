import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10">

        {/* --- Terms & Conditions Section --- */}
        <header className="mb-8 border-b-4 border-teal-500 pb-4">
          <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
            <span className="mr-3 text-teal-500">📑</span>
            Terms & Conditions
          </h1>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">💰 Pricing & Payment</h2>
          <div className="space-y-4 text-gray-700">
            <p className="p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400">
              <strong className="font-semibold text-gray-900">Pricing Validity:</strong> All quoted pricing is valid for a period of **7 days** from the date of issuance.
            </p>
            <p className="p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400">
              <strong className="font-semibold text-gray-900">Payment Terms:</strong> Payment must be made as **Advance / LC** (Letter of Credit), as mutually agreed upon in the sales contract.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">📦 Shipping & Risk</h2>
          <div className="space-y-4 text-gray-700">
            <p className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <strong className="font-semibold text-gray-900">Transit Risk:</strong> Once the shipping container is sealed and officially handed over to the designated shipping line, the **transit risk shifts entirely to the Buyer**.
            </p>
            <p className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <strong className="font-semibold text-gray-900">Documentation:</strong> All necessary export documents will be compiled and shared with the Buyer **before the vessel's scheduled departure**.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">✅ Quality Assurance</h2>
          <div className="space-y-4 text-gray-700">
            <p className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <strong className="font-semibold text-gray-900">Quality Concerns:</strong> Any concerns regarding the quality of the goods must be formally raised within **24 hours of the container opening**.
            </p>
            <p className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <strong className="font-semibold text-gray-900">Proof:</strong> The claim must be substantiated with clear and verifiable **photos and/or videos** of the alleged defects or issues.
            </p>
          </div>
        </section>

        {/* --- Privacy Policy Section --- */}
        <hr className="my-10 border-t-2 border-gray-200" />

        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
            <span className="mr-3 text-amber-500">⭐</span>
            Privacy Policy
          </h1>
        </header>

        <section className="text-gray-700 space-y-6">
          <p>
            <strong className="text-gray-900">Frutshub Exports Private Limited</strong> is committed to protecting the privacy of its clients and partners.
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4">
            <li className="text-lg">
              <strong className="font-semibold text-gray-900">Data Collection:</strong> We collect only the essential details required for effective communication and the generation of accurate quotations.
            </li>
            <li className="text-lg">
              <strong className="font-semibold text-gray-900">Data Sharing:</strong> We uphold a strict policy: We **do not sell, trade, or share** your personal or business information with any third parties.
            </li>
          </ul>
          <p className="text-lg font-semibold pt-4">
            For concerns, contact: <a href="mailto:ananya@fruthubexports.com" className="text-teal-600 hover:text-teal-800 underline">ananya@fruthubexports.com</a>
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;
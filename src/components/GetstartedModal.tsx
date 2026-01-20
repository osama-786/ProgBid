// ExampleWithModalButton.tsx
import React, { useState } from "react";
import Modal from "./Modal"; // adjust the import path as needed
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrandLogo: React.FC = () => (
  <div className="flex items-center gap-2">
    <img className="h-auto w-auto lg:w-32" src="./ProgbidLogo.png" alt="progbid-logo" />
  </div>
);

const GetstartedModalButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size="lg" className="btn-primary rounded-full font-bold"
        onClick={() => setOpen(true)}
      >
        GET STARTED WITH PROGBID
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        {/* Modal Header */}
        <div className="flex items-center justify-between px-7 pt-6 pb-3 border-b border-gray-100 bg-gray-50">
          <BrandLogo />
        </div>
        {/* Modal Body/Form */}
        <form className="px-7 py-6">
          <h2 className="text-lg font-bold mb-1 text-[#242878]">Book your demo</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Fill out the details below and our team will connect with you shortly.
          </p>
          <div className="space-y-4">
            <input
              className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9] focus:outline-none"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9] focus:outline-none"
              placeholder="Work Email"
              type="email"
              required
            />
            <input
              className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9] focus:outline-none"
              placeholder="Phone (Optional)"
            />
            <input
              className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9] focus:outline-none"
              placeholder="Company"
              required
            />
            <select className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9]">
              <option value="">Current Programmatic Spend?</option>
              <option value="less-5k">Less than $5k/month</option>
              <option value="5k-20k">$5k-$20k/month</option>
              <option value="more-20k">More than $20k/month</option>
            </select>
            <select className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9]">
              <option value="">Where are you based?</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Americas">Americas</option>
              <option value="Other">Other</option>
            </select>
            <select className="w-full border border-gray-200 px-4 py-2 rounded-lg text-base focus:border-[#3a3ad9]">
              <option value="">What are you interested in?</option>
              <option value="User Acquisition">User Acquisition</option>
              <option value="Retargeting">Retargeting & Reengagement</option>
              <option value="Branding">Branding</option>
              <option value="Programmatic">Programmatic UA</option>
            </select>
          </div>
          <button
            className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white font-bold rounded-full shadow hover:bg-[#3a3ad9] hover:text-white transition"
            type="submit"
          >
            Book Your Demo <ArrowRight className="w-5 h-5 ml-1" />
          </button>
        </form>
      </Modal>
    </>
  );
};

export { Modal, GetstartedModalButton };
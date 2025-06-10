import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Contact from "./Contact";
import Skills from "./Skills";
import Confirmation from "./Confirmation";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skills: "",
  });
  const [showModal, setShowModal] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = () => {
    // Here the data is send to a server
    console.log(formData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      skills: "",
    });
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <Contact
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <Skills
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 4:
      return (
        <Confirmation
          nextStep={handleSubmit}
          prevStep={prevStep}
          values={formData}
        />
      );
    default:
      return (
        <div className="flex items-center justify-center h-screen">
          {showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
              <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Success!</h3>
                  <div className="mt-2 px-7 py-3">
                    <p className="text-lg text-gray-500">
                      Your details have been submitted successfully.
                    </p>
                  </div>
                  <div className="items-center px-4 py-3">
                    <button
                      id="ok-btn"
                      className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      onClick={closeModal}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
  }
};

export default Form;

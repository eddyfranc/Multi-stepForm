import React from 'react';

const Confirmation = ({ nextStep, prevStep, values }) => {
  const { firstName, lastName, email, phone, skills } = values;

  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const Back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Confirm Your Details</h1>
          <div className="mb-4">
            <p className="text-gray-700 font-bold">First Name:</p>
            <p className="text-gray-600">{firstName}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-bold">Last Name:</p>
            <p className="text-gray-600">{lastName}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-bold">Email:</p>
            <p className="text-gray-600">{email}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-bold">Phone Number:</p>
            <p className="text-gray-600">{phone}</p>
          </div>
          <div className="mb-6">
            <p className="text-gray-700 font-bold">Skills:</p>
            <p className="text-gray-600">{skills}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={Back}
            >
              Back
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={Continue}
            >
              Confirm & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
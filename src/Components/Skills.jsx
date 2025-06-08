import React from 'react';

const Skills = ({ nextStep, prevStep, handleChange, values }) => {
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
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Enter Your Skills</h1>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
              Skills
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="skills"
              placeholder="e.g., React, Node.js, Tailwind CSS"
              value={values.skills}
              onChange={handleChange('skills')}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={Back}
            >
              Back
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={Continue}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skills;
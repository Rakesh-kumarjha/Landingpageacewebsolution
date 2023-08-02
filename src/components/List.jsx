import React from "react";
import Head from "next/head";

export default function ServiceList() {
  // Sample data for display
  const data = [
    { label: "Anita Jane", value: 190 },
    { label: "Charlie Jill", value: 74 },
    { label: "Amy Jackson", value: 190 },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-7 py-20 sm:px-6 px-4">
        <Head>
          {/* If you have other necessary scripts/styles, include them here */}
        </Head>

        {data.map((item, index) => (
          <div key={index} className="w-64 p-4 rounded border hover:shadow-lg">
            <div className="flex justify-center items-center flex-col">
              <div>
                <img src={`https://i.ibb.co/image-${index + 1}.png`} alt="avatar" />
              </div>
              <div className="flex justify-center items-center flex-col mt-3">
                <p className="text-sm font-medium leading-none text-gray-800">{item.label}</p>
                <p className="text-sm font-medium leading-none text-gray-600 mt-1">Job Title</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <h1 className="text-2xl font-semibold leading-normal text-gray-800">{item.value}</h1>
              <div className="p-1 flex justify-between">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14V2"
                    stroke="#059669"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4L8 2L6 4"
                    stroke="#059669"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 14H10"
                    stroke="#059669"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xs leading-3 text-green-700">4.50%</p>
              </div>
            </div>
            <div className="w-56 h-9 mt-4">
              <button
                role="button"
                aria-label="message"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200"
              >
                <p className="text-sm font-medium leading-none text-gray-600">Message</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

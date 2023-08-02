import React from "react";
import New from "../Image/03.jpg";

export default function Destinations() {
  return (
    <div className="py-20 xl:px-0 px-4 xl:mx-auto xl:container bg-gray-50">
      <div className="md:flex items-center justify-between w-full bg-gray-50">
        <div className="xl:w-1/2 md:w-1/2 w-full p-6 xl:m-10">
          <h1 className="focus:outline-none md:w-60 font-bold md:text-4xl text-4xl leading-tight text-gray-800">
            Embark on a Digital Journey with Us
            <br />
            <span className="font-normal italic md:text-xl text-xl">
              Revolutionizing the Digital Landscape with Creativity
            </span>
          </h1>
          <p className="focus:outline-none text-base leading-6 mt-8 text-gray-600 xl:pr-24 xl:pr-0 pr-12">
            Nestled at the heart of Bangalore, our Digital Marketing Agency
            is more than just a company. We're a collective of passionate
            minds, seasoned in the art of crafting remarkable online
            experiences. With years of expertise, we're not just shaping the
            web; we're shaping the future.
          </p>
          <div className="mt-10">
            <button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-white bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                <a href="https://acewebsolution.com/index.html">Unveil the Magic</a>
              <svg
                className="ml-8"
                width={45}
                height={40}
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path data */}
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full xl:pl-48">
          <p className="focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10">
            <span className="font-normal italic focus:outline-none md:w-60 font-bold md:text-4xl text-4xl leading-tight text-gray-800">
              Unveiling Our Essence: Bangalore's Digital Odyssey
            </span>
          </p>
          <div className="w-full relative">
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-yellow-400 rounded-full opacity-75 animate-float" />
              <div className="w-32 h-32 bg-blue-500 rounded-full opacity-75 animate-float" />
              <div className="w-16 h-16 bg-green-400 rounded-full opacity-75 animate-float" />
            </div>
            <img
              src={New}
              alt="Mystical Purple Flowers"
              className="md:w-full sm:w-1/2 w-full"
            />
          </div>
        </div>
      </div>
      <div className="my-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
            <p className="text-gray-600">
              We thrive on pushing boundaries and exploring new creative
              horizons to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Client-Centric</h3>
            <p className="text-gray-600">
              Your success is our priority. We tailor our strategies to your
              unique needs, ensuring your goals are always at the forefront.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

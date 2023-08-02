import React from "react";
import img from "../Image/01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUsers, faRocket } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full bg-gradient-to-r from-purple-700 to-indigo-700 shadow-lg rounded-lg overflow-hidden">
      <div className="w-full lg:w-1/2 p-8 lg:p-16">
        <div className="text-white">
          <h4 className="text-2xl font-semibold mb-2">UNVEILING OUR STORY</h4>
          <h4 className="text-gray-300 text-base font-normal mb-6">What Drives Us?</h4>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Crafting Digital Experiences with Heart and Innovation
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Welcome to the realm where imagination meets technology. At Ace Web Solutions,
            we're more than a digital agency; we're storytellers of the digital age.
            Our passion lies in sculpting meaningful digital experiences that resonate with
            hearts and minds. From the initial spark of an idea to the final pixel, we
            infuse every project with creativity, innovation, and a touch of magic.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Our team is a tapestry of dreamers, thinkers, and creators, united by a common
            goal: to redefine the digital landscape. We're the painters of pixels, the
            weavers of code, and the architects of innovation. Together, we bring to life
            digital wonders that evoke awe and inspire action. Join us in rewriting the
            rules of the digital realm and experience the journey of turning dreams into
            reality.
          </p>
          <div className="flex items-center text-gray-300 text-sm">
            <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
            <p>Leading with Innovation</p>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            <p>Collaborative Teamwork</p>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <FontAwesomeIcon icon={faRocket} className="mr-2" />
            <p>Accelerating Growth</p>
          </div>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
            <a href="https://acewebsolution.com/index.html">Explore More</a>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <img
          className="w-full h-80 lg:h-auto object-cover rounded-lg lg:rounded-bl-none lg:rounded-r"
          src={img}
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Services;

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const CAROUSEL_DATA = [
  {
    url: "https://acewebsolution.com/img/1.png",
  },
  {
    url: "https://acewebsolution.com/img/4.png",
  },
];

const Carousel = () => {
  const form = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex + 1) % CAROUSEL_DATA.length
    );
  };

  const decrementIndex = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(incrementIndex, 5000); // Set the interval for automatic scrolling (5000ms = 5 seconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const carouselStyles = {
    backgroundImage: `url(${CAROUSEL_DATA[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    paddingRight: "20px", // Add padding to create a gap between form and content
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whpen05",
        "template_6ejald6",
        form.current,
        "FnYGENcITNDApYKnt"
      )
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Email has been sent successfully.",
        });
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred while sending the email.",
        });
      });
  };

  return (
    <section className="relative">
      <div style={carouselStyles} className="rounded-md"></div>
      <div
        onClick={decrementIndex}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div
        onClick={incrementIndex}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {/* Display for Big Screens */}
      <div className="hidden xl:block absolute top-0 left-0 xl:left-20 xl:top-52 w-full xl:w-1/3 md:p-4 p-4 text-center xl:mt-8">
        <h2 className="text-white text-4xl font-medium mb-4">
          <span className="text--800 font-bold text-4xl">
            Website Development
          </span>{" "}
          <br /> <br />
          <span>
            It's time to give your Website a Makeover with Ace Web Solution
          </span>
        </h2>
      </div>
      <div className="hidden xl:block absolute top-0 right-0 xl:right-20 xl:top-24 w-full xl:w-2/4 bg-blue-800 p-4 text-center xl:pr-8">
        <h1 className="text-white text-3xl font-semibold mb-2">Contact us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              id="name"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400  focus:outline-none focus:border-blue-500 placeholder-black "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-white"
            >
              Phone
            </label>
            <input
              type="phone"
              placeholder="Enter Your Phone Number"
              id="phone"
              name="phone"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Services
            </label>
            <select
              id="services"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-black"
              name="services"
            >
              <option value="select">Select</option>
              <option value="website_Development">Website Development</option>
              <option value="Search Engine Optimization!">Search Engine Optimization</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="App Development">App Development</option>
              
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Display for Small Screens */}
      <div className="xl:hidden absolute top-0 left-0 w-full md:p-4 p-4 text-center">
        <h1 className="text-white text-3xl font-semibold mb-2">Contact us</h1>
        <h2 className="text-white text-xl font-medium mb-4"></h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              id="name"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400  focus:outline-none focus:border-blue-500 placeholder-black "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-white"
            >
              Phone
            </label>
            <input
              type="phone"
              placeholder="Enter Your Phone Number"
              id="phone"
              name="phone"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Services
            </label>
            <select
              id="services"
              className="mt-1 px-4 py-2 rounded-lg w-full bg-gray-200 bg-opacity-30 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-black"
              name="services"
            >
              <option value="select">Select</option>
              <option value="website_Development">Website Development</option>
              <option value="Search Engine Optimization!">Search Engine Optimization</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="App Development">App Development</option>
              
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="xl:hidden absolute bottom-0 left-0 w-full md:p-4 p-4 text-center">
        <h2 className="text-white text-4xl font-medium mb-4">
          It's time to give your Website a Makeover with Ace Web Solution
        </h2>
      </div>
    </section>
  );
};

export default Carousel;

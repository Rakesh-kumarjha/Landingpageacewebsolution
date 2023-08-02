import React from "react";

function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="flex items-center w-full justify-center">
      <div className="max-w-full rounded shadow bg-white dark:bg-gray-800 p-4 h-64">
      <div className="flex">
          <div className="pr-6">
            <img
              src={imageUrl}
              alt="service"
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">
              {title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 pt-3">
              {description}
            </p>
            <div className="pt-6">
              <button className="py-2 px-4 text-lg font-semibold leading-4 bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:outline-none text-white">
                 <a href="https://acewebsolution.com/index.html">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardComponents() {
  return (
    <ServiceCard
      title="Website Development!"
      description="It's time to give your Website a Makeover with Ace Web Solution, the Best Website Development Company In Bangalore."
      imageUrl="https://acewebsolution.com/img/website%20development.png"
    />
  );
}

function CardComponents1() {
  return (
    <ServiceCard
      title="Search Engine Optimization!"
      description="Grow your Business Online with the Best SEO Agency in Bangalore - Ace Web Solution."
      imageUrl="https://acewebsolution.com/img/services-details%20-2/Search%20Engine%20Optimization.png"
    />
  );
}

function CardComponents2() {
  return (
    <ServiceCard
      title="UI/UX Design!"
      description="Design your Digital Dreams with Ace Web Solution- UI/UX Design Company in Bangalore."
      imageUrl="https://acewebsolution.com/img/UI%20&%20UX%20designing.png"
    />
  );
}

function CardComponents3() {
  return (
    <ServiceCard
      title="Social Media Marketing!"
      description="With Our Expert Social Media Marketing Services- Boost your Brand's Online Presence."
      imageUrl="https://acewebsolution.com/img/social%20media%20marketing.png"
    />
  );
}

function CardComponents4() {
  return (
    <ServiceCard
      title="Digital Marketing!"
      description="Accelerate Your Business Online with our Comprehensive Digital Marketing Agency in Bangalore."
      imageUrl="https://acewebsolution.com/img/services-details%20-2/Digital%20Marketing.png"
    />
  );
}

function CardComponents5() {
  return (
    <ServiceCard
      title="App Development!"
      description="The Best IOS and APP Development Company in Bangalore, and start the journey of your virtual IOS App."
      imageUrl="https://acewebsolution.com/img/Mobile%20App%20development.png"
    />
  );
}

export {
  CardComponents,
  CardComponents1,
  CardComponents2,
  CardComponents3,
  CardComponents4,
  CardComponents5,
};

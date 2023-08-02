import React from "react";
import { motion } from "framer-motion";
import img from "../Image/shubham.jpg"

const TeamMember = ({ name, role, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform"
  >
    <motion.img
      whileHover={{ scale: 1.1 }}
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
    />
    <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
    <p className="text-gray-600 text-md">{role}</p>
  </motion.div>
);

const TeamSection = () => {
    const teamMembers = [
    
        {
          name: "Zakir Ahmad",
          role: "Director",
          image: "https://acewebsolution.com/img/company%20profiles/1.png",
        },
        {
          name: "Nithya",
          role: "Human Resource Manager",
          image: "https://acewebsolution.com/img/company%20profiles/4.png",
        },
        {
          name: "Sourav",
          role: "Frontend Developer",
          image: "https://acewebsolution.com/img/company%20profiles/2.png",
        },
        {
          name: "Rakesh",
          role: "Backend Developer",
          image: "https://acewebsolution.com/img/company%20profiles/rakesh.jpg",
        },
        {
            name: "Shubham",
            role: "Android Developer",
            image: img,
          },
        {
            name: "Anamika",
            role: "SEO & SMM Head",
            image: "https://acewebsolution.com/img/company%20profiles//3.png",
          },
    
    ];

  return (
    <div className="py-16 bg-blue-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-blue-800">Meet Our Team of Experts</h2>
          <p className="text-gray-600">Behind Every Success Story</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

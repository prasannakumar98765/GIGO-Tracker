import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import tick from "../assets/tick.png";
import warehouse from "../assets/warehouse.png";
import supplychain from "../assets/supplychain.png";
import inventory from "../assets/inventory.png";
import order from "../assets/order.png";
import Logisticsec from "./Logisticsec";
import container from "../assets/container.png";
import storage from "../assets/storage.png";


function Logistics() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const loglist = [
    { title: "Supply Chain", icon: supplychain },
    { title: "Inventory Management", icon: inventory },
    { title: "Order Fulfillment", icon: order },
    { title: "Warehousing", icon: warehouse },
  ];

  const list = [
    { text: "Fast Delivery", icon: tick },
    { text: "Safety", icon: tick },
    { text: "Good Packaging", icon: tick },
    { text: "Privacy", icon: tick },
  ];
const items = [
  {
    title: "Supply Chain",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: container,
  },
  {
    title: "Inventory Management",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: storage,
  },
  {
    title: "Order Fulfillment",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: container,
  },
  {
    title: "Warehousing",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: container,
  },
];

// Define different animation styles for each card
const animationPresets = [
  {
    initial: { opacity: 0, y: 30, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  {
    initial: { opacity: 0,  y: 20 },
    animate: { opacity: 1, rotate: 0, y: 0 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
];
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="flex flex-col lg:flex-row gap-10 bg-[#032330] rounded-lg p-6 sm:p-10 lg:p-16"
          data-aos="fade-up"
        >
          {/* Logistics List */}
          <ul
            className="relative flex flex-col gap-6 bg-[#eeeff1] p-6 sm:p-10 w-full lg:max-w-sm rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[30px] before:bg-[#eeeff1] before:origin-top-left before:[transform:skewY(-2deg)]"
            data-aos="fade-right"
          >
            {loglist.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 sm:gap-6 px-6 py-4 bg-white text-black rounded-md hover:bg-[#df1118] hover:text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <img src={item.icon} alt={item.title} className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
                <span className="text-sm sm:text-base font-medium">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* Right Content */}
          <div className="flex flex-col justify-between gap-12 w-full" data-aos="fade-left">
            {/* Description */}
            <div className="px-6 py-4 border-l-4 border-[#df1118] bg-[#021922] text-white text-sm sm:text-base">
              For each project we establish relationships with partners who we know will help us create added value.
            </div>

            {/* Image with overlay */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0" data-aos="zoom-in">
              <img
                src={warehouse}
                alt="Warehouse"
                className="w-full h-64 sm:h-72 lg:h-60 object-cover rounded-md"
              />

              <div
                className="absolute top-0 left-0 h-full w-[60%] sm:w-[180px] bg-[#df1118] z-10
                [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] flex flex-col justify-center pl-4 gap-3 rounded-l-md"
              >
                {list.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white text-xs sm:text-sm"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <img src={item.icon} alt="" className="w-4 h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-6" data-aos="fade-up">
              <div className="flex items-center gap-2 text-white">
                <img src={tick} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-base font-medium">Dedicated Transport Wise</p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <img src={tick} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-base font-medium">Domestic & Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section with Scroll Effects */}
      <div data-aos="fade-up">
        <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 text-center">
        <motion.h1
          className="text-3xl lg:text-4xl font-bold text-[#032330]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We Provide Supply Chain & Warehousing
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-3xl text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A full administration printing experience. Print shirts for yourself
          or your online business. Beautiful, customizable template.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-8">
          {items.map((item, index) => {
            const anim = animationPresets[index % animationPresets.length];

            return (
              <motion.div
                key={index}
                initial={anim.initial}
                whileInView={anim.animate}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                {/* Text Content */}
                <div className="flex flex-col justify-between p-6 sm:p-10 gap-4 w-full">
                  <h2 className="text-[#df1118] text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <ul className="flex flex-col p-6 gap-2">
                    <li className="flex items-center gap-2 text-gray-800 text-sm sm:text-base">
                      <img src={tick} alt="Tick" className="w-4 h-4" />
                      Fast Delivery & Secure Package
                    </li>
                    <li className="flex items-center gap-2 text-gray-800 text-sm sm:text-base">
                      <img src={tick} alt="Tick" className="w-4 h-4" />
                      Safety & Privacy Security
                    </li>
                  </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-[240px] h-[200px] sm:h-[280px] md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}

export default Logistics;

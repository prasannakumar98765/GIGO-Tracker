import React from "react";
import { motion } from "framer-motion";
import tick from "../assets/tick.png";
import container from "../assets/container.png";
import storage from "../assets/storage.png";

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

const Logisticsec = () => {
  return (
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
  );
};

export default Logisticsec;

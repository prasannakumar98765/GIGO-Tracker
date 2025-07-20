import React from 'react'
import wenmade from '../assets/wemade.jpg'
import bgwe from '../assets/bgwe.jpg'

const WeMade = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${bgwe})`,
      }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            We Made Delivery Process Simple!
          </h1>
          <p className="text-base sm:text-lg text-justify text-gray-800">
            Our Gigo team ensures the safe parcel delivery services that end-to-end experience hassle-free e-commerce delivery services designed to keep your online orders moving smoothly. Our streamlined process ensures your packages reach customers quickly, safely, and on time. Say goodbye to complicated tracking and delays – just fast, reliable delivery tailored for your e-commerce business. Simplify your shipping today with our trusted e-commerce delivery services!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={wenmade}
            alt="We Made"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default WeMade

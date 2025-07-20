
import React from 'react'
import doorstep from '../assets/doorstep-delivery.png'
import realtimetracking from '../assets/real-time-tracking.png'
import trust from '../assets/trust.png'
import interestrate from '../assets/interest-rate.png'
import oursupport from '../assets/our-support.jpg'

const WhyChoose = () => {
  return (

    <div className='lg:m-20 flex justify-center '>
   <div className="bg-[#032330] p-4 lg:p-28 lg:flex flex-row  lg:gap-20 text-white">
  {/* Left Section */}
  <div className="flex flex-col gap-6 max-w-md">
    <h1 className="text-4xl font-bold">Why Choose Us?</h1>
    <p className="text-lg text-justify leading-loose">
     At GIGO Delivery Services, we’re not just a delivery company. We're your logistics partner. Our deep local expertise, tech-enabled operations, and skilled manpower make us the go-to choice for reliable, end-to-end delivery solutions.
    </p>
    <img 
      src= {oursupport}
      alt="Team working together" 
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Right Section (Feature Cards) */}
  <div className="flex flex-col gap-4">
    {/* Feature 1 */}
    <div className="p-5 flex flex-col gap-4 rounded-2xl bg-[#193952] shadow-md w-fit">
      <img 
        src={doorstep} 
        alt="Fast Delivery" 
        className="w-12 h-12"
      />
      <h2 className="text-xl font-semibold">Doorstep Delivery Services</h2>
      <p>
        Fast, reliable doorstep delivery at your convenience — from groceries to parcels, <br/> we bring it right to your door.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="p-5 flex flex-col gap-4 rounded-2xl bg-[#193952] shadow-md w-fit">
      <img 
        src={realtimetracking} 
        alt="realtimetracking" 
        className="w-12 h-12"
      />
      <h2 className="text-xl font-semibold">Real-Time Tracking</h2>
      <p>
       Stay informed every step of the way with real-time tracking for all your deliveries.<br/> Know exactly where your package is — from pickup to doorstep.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="p-5 w-fit flex flex-col gap-4 rounded-2xl bg-[#193952] shadow-md">
      <img 
        src={trust} 
        alt="Trusted by locals" 
        className="w-12 h-12"
      />
      <h2 className="text-xl font-semibold">Trusted by Locals & Businesses</h2>
      <p>
       Trusted by local residents and businesses for fast, reliable delivery every time.
Join<br/> thousands who count on us for secure and professional doorstep service.
      </p>
    </div>

     {/* Feature 4 */}
    <div className="p-5 flex flex-col gap-4 rounded-2xl bg-[#193952] shadow-md w-fit">
      <img 
        src= {interestrate} 
        alt="interestrate" 
        className="w-12 h-12"
      />
      <h2 className="text-xl font-semibold">Cost Effective Rates</h2>
      <p>
      Enjoy premium doorstep delivery services at budget-friendly, transparent rates.
      
No<br/> hidden fees — just reliable service that fits your wallet. 
      </p>
    </div>
  </div>
</div>
</div>

  )
}

export default WhyChoose
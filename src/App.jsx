import './App.css'
import Demo from './common/LocationTracker'
import Logistics from './common/Logistics'
import SimulateLocation from './common/SimulateLocation'
import Tracker from './common/Tracker'
import WeMade from './common/WeMade'
import Whatmakes from './common/Whatmakes'
import WhyChoose from './common/WhyChoose'

function App() {
 
  return (
    <>
     {/* <Demo/> */}
     {/* <Logistics/> */}
     {/* <Whatmakes/> */}
     {/* <WhyChoose/> */}
     {/* <WeMade/> */}
      <div>
      <h2 style={{ textAlign: "center" }}>🚚 Delivery Tracking</h2>
      <SimulateLocation/>
 <Tracker/>
    </div>
   
    </>
  )
}

export default App

import '../App.css'
import {Button} from "@/components/ui/button" 
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Search from '../components/search'
import VHImap from '../components/VHImap'


function Crops() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-gray-800">Crops</h2>
        </div>
        <div className="flex">
            <div className="w-1/4" style={{paddingRight: '20px'}}>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="legend">
                  <div className="legend-item" style={{ backgroundColor: '#008000' }}>90-100</div>
                  <div className="legend-item" style={{ backgroundColor: '#ADFF2F' }}>75-89</div>
                  <div className="legend-item" style={{ backgroundColor: '#FFFF00' }}>60-74</div>
                  <div className="legend-item" style={{ backgroundColor: '#FFA500' }}>45-59</div>
                  <div className="legend-item" style={{ backgroundColor: '#FF0000' }}>30-44</div>
                  <div className="legend-item" style={{ backgroundColor: '#A52A2A' }}>15-29</div>
                  <div className="legend-item" style={{ backgroundColor: '#8B0000' }}>0-14</div>
                </div>
              </div>
            </div>
          <div className="w-1/3">
            <VHImap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Crops


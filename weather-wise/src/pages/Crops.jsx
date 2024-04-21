import '../App.css';
import Navbar from '../components/navbar';
import Search from '../components/search';
import VHImap from '../components/VHImap';


function Crops() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-gray-800">Crops</h2>
        </div>
        <div className="mb-4 flex justify-end mx-20"> {/* Aligns search to the right */}
          <Search placeholder="Search for a district" />
        </div>
        <div className="flex justify-between"> {/* Aligns legend and map */}
          <div className="w-1/4" style={{ paddingRight: '20px' }}>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="legend">
                <div className="legend-item" style={{ backgroundColor: '#008000' }}>90-100</div>
                <div className="legend-item" style={{ backgroundColor: '#ADFF2F' }}>75-89</div>
                <div className="legend-item" style={{ backgroundColor: '#FFFF00' }}>60-74</div>
                <div className="legend-item" style={{ backgroundColor: '#FFB000' }}>45-59</div>
                <div className="legend-item" style={{ backgroundColor: '#FFA300' }}>30-44</div>
                <div className="legend-item" style={{ backgroundColor: '#A52A2A' }}>15-29</div>
                <div className="legend-item" style={{ backgroundColor: '#8B0000' }}>0-14</div>
              </div>
            </div>
          </div>
          <div className="w-1/3"> {/* Aligns map to the right */}
            <VHImap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Crops;

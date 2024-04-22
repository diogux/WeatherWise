import '../App.css';
import Navbar from '../components/navbar';
import Search from '../components/search';
import VHImap from '../components/VHImap';

function Crops() {
  const legendItems = [
    { range: '90-100', color: '#008000' },
    { range: '75-89', color: '#ADFF2F' },
    { range: '60-74', color: '#FFFF00' },
    { range: '45-59', color: '#FFB000' },
    { range: '30-44', color: '#FFA300' },
    { range: '15-29', color: '#A52A2A' },
    { range: '0-14', color: '#8B0000' }
  ];

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
          <div className="w-1/8" style={{ paddingRight: '20px' }}>
            {/* change the w-1/8 to w-1/4 to get the normal size */}
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <table>
                <tbody>
                  {legendItems.map((item, index) => (
                    <tr key={index}>
                      <td className="legend-item w-7" style={{ backgroundColor: item.color }}></td>
                      <td className="legend-item" style={{ backgroundColor: '#FFFFFF' }} >{item.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

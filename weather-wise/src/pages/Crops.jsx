import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import VHImap from '../components/VHImap';
import SearchMap from '@/components/search_map';
import PWSmap from '@/components/PWSmap';

function Crops() {
  // Step 1: Define filter options
  const filterOptions = [
    { label: 'Vegetation Health Index', value: 'VHI' },
    { label: 'Percentage of water in the soil', value: 'PWS' },
    { label: 'Number of cold hours', value: 'NCH' },
    // Add more options as needed
  ];

const VHIItems = [
    { range: '90-100', color: '#008000' },
    { range: '75-89', color: '#ADFF2F' },
    { range: '60-74', color: '#FFFF00' },
    { range: '45-59', color: '#FFB000' },
    { range: '30-44', color: '#FFA300' },
    { range: '15-29', color: '#A52A2A' },
    { range: '0-14', color: '#8B0000' }
  ];

  const PWSItems = [
    { color: '#00008B', range: 'CC(>99)' },
    { color: '#FFA500', range: '[50, 60]' },
    { color: '#ADFF2F', range: '[40, 50]' },
    { color: '#008000', range: '[30, 40]' },
    { color: '#00FFFF', range: '[20, 30]' },
    { color: '#0000FF', range: '[10, 20}' },
    { color: '#FF0000', range: 'PEP(>1)' }
  ];
  
  



  // Step 2: Set up state to track selected filter
  const [selectedFilter, setSelectedFilter] = useState('VHI'); // Set default to 'VHI'

  // Step 3: Function to handle filter selection
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    // You can add logic here to update the map and legend based on the selected filter
  };

  // Step 4: Define legend content based on selected filter
  const VHIfilter = (
   <div className="border border-gray-300 rounded-md overflow-hidden">
              <table>
                <tbody>
                  {VHIItems.map((item, index) => (
                    <tr key={index}>
                      <td className="legend-item w-7" style={{ backgroundColor: item.color }}></td>
                      <td className="legend-item" style={{ backgroundColor: '#FFFFFF' }} >{item.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  );

  const PWSfilter = (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <table>
        <tbody>
          {PWSItems.map((item, index) => (
            <tr key={index}>
              <td className="legend-item w-7" style={{ backgroundColor: item.color }}></td>
              <td className="legend-item" style={{ backgroundColor: '#FFFFFF' }}>{item.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-gray-800">Crops</h2>
        </div>
        <div className="flex"> {/* Aligns legend and map */}
          <div className="w-1/4" style={{ paddingRight: '0px' }}>
            {/* Step 4: Add filter menu */}
            <div>
              <select
                value={selectedFilter}
                onChange={handleFilterChange}
                className="border border-gray-300 rounded-md py-2 px-3 mb-2 block w-full appearance-none bg-black/20"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Step 5: Conditional rendering based on selected filter */}
            {selectedFilter === 'VHI' && VHIfilter}
            {selectedFilter === 'PWS' && PWSfilter}
          </div>
          <div className="w-1/2 pl-20"> {/* Right side for the map */}
            <div className="mb-2"> {/* Add margin-bottom to the search */}
              <SearchMap placeholder="Search for a location"/>
            </div>
            {/* Step 5: Conditional rendering based on selected filter */}
            {selectedFilter === 'VHI' && <VHImap />}
            {selectedFilter === 'PWS' && <PWSmap />}
            {selectedFilter === 'NCH' && <NCHmap />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Crops;
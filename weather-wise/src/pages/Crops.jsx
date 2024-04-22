import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import VHImap from '../components/VHImap';
import SearchMap from '@/components/search_map';

function Crops() {
  // Step 1: Define filter options
  const filterOptions = [
    { label: 'Vegetation Health Index', value: 'VHI' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
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
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-gray-800">Crops</h2>
        </div>
        <div className="flex justify-between"> {/* Aligns legend and map */}
          <div className="w-1/4" style={{ paddingRight: '20px' }}>
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
          </div>
          <div className="w-1/2 pl-4"> {/* Right side for the map */}
            <div className="mb-2"> {/* Add margin-bottom to the search */}
              <SearchMap placeholder="Search for a location"/>
            </div>
            {/* Step 5: Conditional rendering based on selected filter */}
            {selectedFilter === 'VHI' && <VHImap />}
            {/* Add conditional rendering for other options if needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Crops;
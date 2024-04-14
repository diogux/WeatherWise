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
        <VHImap></VHImap>
      </div>
    </>
  );
}

export default Crops


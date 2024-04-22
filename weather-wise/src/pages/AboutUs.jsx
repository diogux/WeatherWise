import '../App.css';
import Navbar from '../components/navbar';
import Card from '../components/card'

function AboutUs() {

return (
  <>
    <Navbar />
    <div className="container mx-auto px-4 flex justify-center">
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        {/* Add your Card components here */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </>
);
}


export default AboutUs;


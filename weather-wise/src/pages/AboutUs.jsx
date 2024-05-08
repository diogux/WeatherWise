import Navbar from '../components/navbar';
import CardImage from '../components/card_image';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 flex justify-center">
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center">About Us</h2>
          <div className="mt-8 px-6 py-4 rounded-lg shadow-lg bg-white/60 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900">About this project</h3>
            <p className="text-gray-600 mt-4">
              WeatherWise is a web application that provides users with weather forecasts, health advice, and travel tips. Our goal is to help users make informed decisions based on the weather conditions in their area.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <CardImage 
              github_url="https://github.com/diogux"
              name="Diogo" 
              imageSrc="https://utfs.io/f/dd392629-82ac-4a43-ab8d-ba3dbca9b455-1kwtte.png" />
            <CardImage 
              github_url="https://github.com/TKahk"
              name="José" 
              imageSrc="https://utfs.io/f/66cd909f-519d-4f2c-a27c-435a1e6a95d5-1rfl3g.png" />
            <CardImage 
              github_url="https://github.com/raquelvinagre" 
              name="Raquel" 
              imageSrc="https://utfs.io/f/21091a65-7e22-4f33-8c9d-2d1aac825c7a-fikgp2.png" />
          </div>
          {/* Text card for team description */}
          <div className="mt-8 px-6 py-4 rounded-lg shadow-lg bg-white/60 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900">Our Team</h3>
            <p className="text-gray-600 mt-4">
              We are a diverse team of passionate software developers dedicated to delivering innovative solutions. Our combined expertise drives our mission to create impactful digital experiences that cater to our client's needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

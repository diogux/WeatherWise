import Navbar from '../components/navbar';
import CardImage from '../components/card_image'

function AboutUs() {

return (
  <>
    <Navbar />
    <div className="container mx-auto px-4 flex justify-center">
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center" >About Us</h2>
        {/* Add your Card components here */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <CardImage 
          github_url="https://github.com/diogux"
          name="diogu" 
          imageSrc="https://utfs.io/f/dd392629-82ac-4a43-ab8d-ba3dbca9b455-1kwtte.png" />
          <CardImage 
          github_url="https://github.com/TKahk"
          name="José" 
          imageSrc="https://utfs.io/f/66cd909f-519d-4f2c-a27c-435a1e6a95d5-1rfl3g.png" />
          <CardImage 
          github_url="https://github.com/raquelvinagre" 
          name="raquete" 
          imageSrc="https://utfs.io/f/21091a65-7e22-4f33-8c9d-2d1aac825c7a-fikgp2.png" />
        </div>
      </div>
    </div>
  </>
);
}


export default AboutUs;


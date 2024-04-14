import '../App.css'
import {Button} from "@/components/ui/button" 
import Navbar from '../components/navbar'

function Home() {

  return (
    <>
<div className="background-containerflex-col min-h-screen">
      <Navbar></Navbar>
            <div className="mx-auto w-full flex-grow p-10 ">
            <h2 className="text-4xl font-bold text-grey">Forecast</h2>
            </div>
        </div>

    </>
  );
}

export default Home


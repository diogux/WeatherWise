import "../App.css";
import { Button } from "@/components/ui/button";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";
import StormsMap from "../components/StormsMap";

function Storms() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="mx-auto w-full flex-grow pt-10 pl-10 ">
          <h2 className="text-4xl font-bold text-grey">Storms</h2>
          <div className="flex flex-col items-center justify-center">
            <StormsMap />
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Storms;

import './App.css'
import {Button} from "@/components/ui/button" 
import Navbar from './components/navbar'
import Footer from './components/footer'
import Search from './components/search'

function App() {

  return (
    <>
<div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
            <div className="mx-auto w-full flex-grow p-10 ">
              <Search></Search>
            </div>
            <Footer />
        </div>

    </>
  );
}

export default App

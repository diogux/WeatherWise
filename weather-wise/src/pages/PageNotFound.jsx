import '../App.css'
import Navbar from '../components/navbar'

function PageNotFound() {

  return (
    <>
<div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
            <div className="mx-auto w-full flex-grow p-10 ">
            <h2 className="text-4xl font-bold text-grey text-center">404 PAGE NOT FOUND</h2>
            <h1>burro como é q chegaste aqui sequer bro</h1>
            </div>
        </div>

    </>
  );
}

export default PageNotFound



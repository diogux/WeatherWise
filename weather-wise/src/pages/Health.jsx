import '../App.css'
import Navbar from '../components/navbar'

function Health() {

  return (
    <>
<div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
            <div className="mx-auto w-full flex-grow p-10 ">
            <h2 className="text-4xl font-bold text-grey">Health</h2>
            <div className="rating gap-1 bg-white/30 mt-10">
              <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
              <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-green-400"  />
              dá para clicar nos corações
            </div>
    <div className="weekly-forecast-table w-1/6 grow bg-white/50">
                <div className="day text-grey text">Current Air Quality: GOOD</div>
    </div>
            </div>
        </div>

    </>
  );
}

export default Health


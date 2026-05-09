import Sidebar from "./components/Sidebar.jsx";
import Search from "./components/Search.jsx";
import Welcome from "./components/Welcome.jsx";
import TrickCard from "./components/TrickCard.jsx";
import Calendar from "./components/Calendar.jsx";
import backflipIcon from "./assets/backflip.png";
import plancheIcon from "./assets/planche.png";
import frontflipIcon from "./assets/frontflip.png";
import frontlever from "./assets/frontlever.png";

const App = () => {
    return (
        <main className="flex">
            <Sidebar />
            <section className= "flex flex-col w-[55%] bg-gray-900 border-r border-gray-600">
                <Search className="w-full"/>x
                <Welcome name="Matias"/>
                <div className="flex justify-between items-center mt-6 p-5">
                    <h1 className="text-white text-2xl">Recent Progress</h1>
                    <button className= "p-2 text-gray-400 bg-gray-700 rounded-[6px] text-[12px]">View All</button>
                </div>
                <div className="flex flex-col gap-4 p-5">
                    <ul className="flex gap-4">
                        <TrickCard name="Backflip" image = {backflipIcon} progress="80%"/>
                        <TrickCard name="Planche" image = {plancheIcon} progress="65%"/>
                        <TrickCard name="Frontflip" image = {frontflipIcon} progress="70%"/>
                        <TrickCard name="Frontlever" image = {frontlever} progress="50%"/>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 ml-5 p-5 w-fit border-2 border-gray-600 rounded-2xl bg-gray-800">
                    <Calendar />
                </div>

            </section>
        </main>
    )
}
export default App

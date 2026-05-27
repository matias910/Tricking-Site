import { useState } from 'react';
import Sidebar from "./components/Sidebar.jsx";
import Search from "./components/Search.jsx";
import Welcome from "./components/Welcome.jsx";
import TrickCard from "./components/TrickCard.jsx";
import Calendar from "./components/Calendar.jsx";
import displayIcon from "./assets/displayIcon.svg";
import backflipIcon from "./assets/backflip.png";
import plancheIcon from "./assets/planche.png";
import frontflipIcon from "./assets/frontflip.png";
import frontlever from "./assets/frontlever.png";
import humanFlag from "./assets/humanFlag.png";
import vSit from "./assets/vSit.png";
import aerial from "./assets/aerial.png";
import BigCard from "./components/BigCard.jsx";
import Stats from "./components/Stats.jsx";
import tricks from "./data/tricks.js";

const App = () => {

    const [showSidebar, setShowSidebar] = useState(() => window.innerWidth >= 1024);
    const [selectedTrick, setSelectedTrick] = useState(tricks[0]);
    const [showBigCard, setShowBigCard] = useState(() => window.innerWidth >= 1024)
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTricks = tricks.filter((trick) => trick.name.toLowerCase().includes(searchTerm.toLowerCase()));


    return (
        <main className="flex min-h-screen bg-gray-900 overflow-x-hidden">
            {showSidebar && (
                <div className="transition-all duration-300 ease-in-out  bg-gray-900 border-r border-gray-600  ">
                    <Sidebar />
                </div>
            )}
            <button onClick={() => setShowSidebar(!showSidebar) }>
                <img src={displayIcon} alt="Display Icon" className="w-10 h-10 absolute top-5"/>
            </button>
            <section className= "flex flex-1 flex-col min-w-0 bg-gray-900 border-r border-gray-600">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="w-full"/>
                <Welcome name="Matias"/>
                <div className="flex justify-between items-center mt-6 p-5">
                    <h1 className="text-white text-2xl">Recent Progress</h1>
                    <button className= "p-2 text-gray-400 bg-gray-700 rounded-[6px] text-[12px]" onClick={() => setSearchTerm("")}>View All</button>
                </div>
                <div className="flex flex-col gap-4 p-5">
                    <ul className="flex gap-4 flex-wrap flex-1 ">
                        {filteredTricks.length > 0 ? (
                            filteredTricks.map((trick) => (
                                <button
                                    className="transition-all duration-200 hover:scale-[1.2] hover:-translate-y-1 hover:shadow-lg"
                                    key={trick.name}
                                    onClick={() => setSelectedTrick(trick)}
                                >
                                    <TrickCard key={trick.name} {...trick} />
                                </button>
                            ))
                        ) : (
                            <p className="text-gray-400 italic">No tricks found matching "{searchTerm}"</p>
                        )}
                    </ul>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 items-center mt-3 p-2">
                    <div className="flex flex-col gap-4  p-5 w-fit border-2 border-gray-600 rounded-2xl bg-gray-800">
                        <Calendar />
                    </div>
                    <div className="flex p-5 w-[22.6rem] border-2 border-gray-600 rounded-2xl bg-gray-800">
                        <Stats />
                    </div>
                </div>
            </section>
                <button onClick={() => setShowBigCard(!showBigCard)}>
                    <img src={displayIcon} alt="DisplayIcon" className="w-10 h-10 absolute top-5 right-5"/>
                </button>
                {showBigCard && <section className="xl:block w-[45%]">
                    <BigCard
                    trick={selectedTrick.name}
                    image={selectedTrick.image}
                    progress={selectedTrick.progress}
                    difficulty={selectedTrick.difficulty}
                    description={selectedTrick.description}
                    step1={selectedTrick.steps[0]}
                    step2={selectedTrick.steps[1]}
                    step3={selectedTrick.steps[2]}
                    step4={selectedTrick.steps[3]}
                />
                </section>}
        </main>
    )
}
export default App

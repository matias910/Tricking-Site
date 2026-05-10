import dropIcon from "../assets/drop.svg";

const Stats = () => {
    return (
        <div className="w-64 flex flex-col gap-8.5">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-white text-xl">Stats</h1>

                <button className="flex items-center gap-2 text-gray-300 bg-gray-700 px-3 py-2 rounded-[6px] text-sm hover:bg-gray-600 transition">
                    Month
                    <img src={dropIcon} alt="drop icon" className="w-3 h-3" />
                </button>
            </div>

            <div className="text-white flex flex-row justify-between items-center ">
                <h1>Tricks Progressed</h1>
                <h1>Trainings</h1>
                <h1>XP</h1>
            </div>

            <div className="flex items-end gap-3 h-32 border-b border-l border-gray-600 px-3">
                <div className="w-5 h-12 bg-green-500 rounded-t-md hover:bg-green-400 transition"></div>
                <div className="w-5 h-20 bg-green-500 rounded-t-md hover:bg-green-400 transition"></div>
                <div className="w-5 h-16 bg-green-500 rounded-t-md hover:bg-green-400 transition"></div>
                <div className="w-5 h-24 bg-green-500 rounded-t-md hover:bg-green-400 transition"></div>
                <div className="w-5 h-14 bg-green-500 rounded-t-md hover:bg-green-400 transition"></div>
                <div className="w-5 h-28 bg-green-500 rounded-t-md hover:bg-green-400 transition"></div>
            </div>

            <div className="flex justify-between text-gray-400 text-xs mt-2 px-3">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
        </div>
    )
}
export default Stats

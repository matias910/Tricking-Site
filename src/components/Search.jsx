import searchIcon from "../assets/search.svg";
import notificationsIcon from "../assets/notifications.svg";
import addIcon from "../assets/add.svg";

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="w-full mt-4 pr-5">
            <div className="flex justify-end gap-4">
                <button className="transition-all duration-300 hover:scale-[1.5] ease-in-out"><img src={addIcon} alt="add Icon"/></button>
                <div className="flex gap-2 rounded-[4px] bg-gray-700 p-2">
                    <img src={searchIcon} alt="Search icon" className="w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search tricks..."
                        className="w-40 outline-none text-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="transition-all duration-300 hover:scale-[1.5] ease-in-out" >
                    <img src={notificationsIcon} alt="Notification Icon" />
                </button>
            </div>
        </div>
    )
}

export default Search
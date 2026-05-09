
const TrickCard = ({name, image, progress}) => {
    return (
        <li className="flex flex-col gap-2 rounded-[6px] bg-gray-700 h-65 w-50">
            <img src={image} alt="Trick Icon" className="w-50 h-50 rounded-[6px]"/>
            <div className="flex justify-between items-center pl-4 pr-4">
                <p className=" text-[16px] text-white">{name}</p>
                <p className=" text-white pb-1">{progress}</p>
            </div>
        </li>
    )
}
export default TrickCard

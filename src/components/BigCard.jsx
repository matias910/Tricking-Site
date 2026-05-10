import backIcon from "../assets/back.svg";
import moreIcon from "../assets/more.svg";
import checkIcon from "../assets/check.svg";

const ProgressBar = ({ value = 0, min = 0, max = 100, labelPosition = "right" }) => {
    const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

    return (
        <div className="flex items-center gap-3 w-full">
            {labelPosition === "left" && (
                <span className="text-white text-sm">{Math.round(percentage)}%</span>
            )}

            <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {labelPosition === "right" && (
                <span className="text-white text-sm">{Math.round(percentage)}%</span>
            )}
        </div>
    );
};


const BigCard = ({trick, image, progress, difficulty, description, step1, step2, step3, step4}) => {
    return (
        <div className="flex flex-col gap-5 w-auto p-4">
            <div className="flex justify-between items-center ">
                <button className><img src={backIcon} alt="back icon"/></button>
                <h1 className="text-white">{trick}</h1>
                <button><img src={moreIcon} alt="more icon"/></button>
            </div>
            <div className="flex flex-row gap-2">
                <img src={image} alt="Trick Icon" className="w-55 h-55 rounded-[6px]"/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] text-white">{trick}</h1>
                    <h2 className="bg-green-900 text-green-400 w-min p-2 rounded-[12px]">{difficulty}</h2>
                    <h2 className="text-white text-[12px]
                    ">{description}</h2>
                    <h1 className="text-white">Your Progress:</h1>
                    < ProgressBar value={progress} min={0} max={100} labelPosition="left" />
                </div>
            </div>
            <div className="text-white ">
                <p className="mb-3">Your progress</p>
                <ul className="flex flex-col gap-2">
                    <li className="flex flex-row gap-3 pt-2 border-t "><img className="bg-green-900 rounded-2xl" src={checkIcon} alt="check Icon"/> {step1}</li>
                    <li className="flex flex-row gap-3 pt-2 border-t"><img className="bg-green-900 rounded-2xl" src={checkIcon} alt="check Icon"/> {step2}</li>
                    <li className="flex flex-row gap-3 pt-2 border-t" ><img className="bg-green-900 rounded-2xl" src={checkIcon} alt="check Icon"/> {step3}</li>
                    <li className="flex flex-row gap-3 pt-2 border-t"><img className="bg-green-900 rounded-2xl" src={checkIcon} alt="check Icon"/> {step4}</li>
                </ul>
            </div>
            <p className="text-white">Training Log</p>
            <ul className="">
                <li className="text-white border-2 border-gray-600 rounded-2xl p-2">May 21 - felt smooth - Good</li>
                <li className="text-white border-2 border-gray-600 rounded-2xl p-2">May 19 - need more height - Okay</li>
                <li className="text-white border-2 border-gray-600 rounded-2xl p-2">May 17 - better landings - Good</li>
            </ul>
            <button className="bg-green-600 text-white rounded-[6px] h-12">Log Training</button>
        </div>
    )
}

export default BigCard;
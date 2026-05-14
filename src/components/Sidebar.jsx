import unlockIcon from "../assets/unlock.svg";
import dashboardIcon from "../assets/dashboard.svg";
import tricksIcon from "../assets/tricks.svg";
import trainingIcon from "../assets/training.svg";
import progressIcon from "../assets/progress.svg";
import calendarIcon from "../assets/calendar.svg";
import statsIcon from "../assets/stats.svg";
import goalsIcon from "../assets/goals.svg";
import flipsIcon from "../assets/flips.svg";
import calisthenicsIcon from "../assets/calisthenics.svg";
import runningIcon from "../assets/running.svg";
import accountIcon from "../assets/account.svg";


const SidebarButtons = ({name, image}) => {
    return (
        <li className="flex gap-3 items-center text-white">
            <img src={image} alt={`"{name} icon`} className="w-5 h-5"/>
            <p>{name}</p>
        </li>
    );
}

const Profile = ({name, image, level}) => {
  return(
      <div className="mt-auto flex gap-3 items-center border-t border-gray-600 pt-3">
          <img src={image} alt="Profile Picture"/>
          <div>
              <h1 className="text-white ">{name}</h1>
              <p className="text-gray-400">Level {level}</p>
          </div>
      </div>
  );
}

const Sidebar = () => {
    const SideBarButtonsDisplay = [
        {name: "Dashboard", image: dashboardIcon},
        {name: "Tricks", image: tricksIcon},
        {name: "Training", image: trainingIcon},
        {name: "Progress", image: progressIcon},
        {name: "Calendar", image: calendarIcon},
        {name: "Stats", image: statsIcon},
        {name: "Goals", image: goalsIcon},
    ];

    return (
        <div className="flex flex-col gap-8 p-10 pl-8 bg-gray-950 h-max font-stretch-100%">
            <div className="flex items-center gap-3 justify-center">
                <h1 className="text-white">UNLOCK</h1>
                <img src={unlockIcon} alt="Unlock icon" />
            </div>
            <nav>
                <ul className="flex flex-col gap-7 text-[18px]">
                    {SideBarButtonsDisplay.map((button) => (
                        <SidebarButtons {...button}/>
                    ))}
                </ul>
            </nav>


            <nav className="flex flex-col gap-4">
                <h1 className="text-white">COLLECTIONS</h1>
                <ul className = "flex flex-col gap-7">
                    <SidebarButtons name="Flips" image={flipsIcon} />
                    <SidebarButtons name="Calisthenics" image={calisthenicsIcon} />
                    <SidebarButtons name="Running" image={runningIcon} />
                </ul>
            </nav>

            <Profile name ="Matias" image={accountIcon} level={1}/>

        </div>
    );
}

export default Sidebar;

import backflipIcon from "../assets/backflip.png";
import plancheIcon from "../assets/planche.png";
import frontflipIcon from "../assets/frontflip.png";
import frontlever from "../assets/frontlever.png";
import humanFlag from "../assets/humanFlag.png";
import vSit from "../assets/vSit.png";
import aerial from "../assets/aerial.png";

const tricks = [
    {
        name: "Backflip",
        image: backflipIcon,
        progress: "80",
        category: "Tricking",
        difficulty: "Easy",
        description: "Learn to flip your body back",
        steps: ["Jump and tuck", "Look up", "Look down", "Look straight ahead"],
    },
    {
        name: "Planche",
        image: plancheIcon,
        progress: "65",
        difficulty: "Hard",
        category: "Calisthenics",
        description: "Hold your body parallel to the ground",
        steps: ["Lock your elbows", "Lean forward", "Keep your core tight", "Point your toes"],
    },
    {
        name: "Frontflip",
        image: frontflipIcon,
        progress: "70",
        difficulty: "Medium",
        category: "Tricking",
        description: "Learn to flip your body forward",
        steps: ["Jump up", "Tuck your knees", "Rotate forward", "Spot the ground"],
    },
    {
        name: "Frontlever",
        image: frontlever,
        progress: "50",
        difficulty: "Hard",
        category: "Calisthenics",
        description: "Hold your body straight while hanging",
        steps: ["Grip the bar", "Pull your shoulders down", "Keep your body straight", "Hold the position"],
    },
    {
        name: "Human Flag",
        image: humanFlag,
        progress: "40",
        difficulty: "Hard",
        category: "Calisthenics",
        description: "Hold your body sideways on a pole",
        steps: ["Set your hand position", "Push and pull", "Lift your legs", "Hold your body straight"],
    },
    {
        name: "V-Sit",
        image: vSit,
        progress: "30",
        difficulty: "Medium",
        category: "Calisthenics",
        description: "Hold your legs high in a V shape",
        steps: ["Sit on the floor", "Place your hands down", "Lift your hips", "Raise your legs"],
    },
    {
        name: "Aerial",
        image: aerial,
        progress: "20",
        difficulty: "Medium",
        category: "Tricking",
        description: "Do a cartwheel without using your hands",
        steps: ["Step into it", "Kick your back leg", "Drive your chest sideways", "Land controlled"],
    },
];

export default tricks;


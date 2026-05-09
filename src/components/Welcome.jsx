const Welcome = ({name}) => {
    return (
        <div className="flex flex-col gap-2 mt-10 pl-5">
            <h1 className="text-white text-[30px]">Welcome back, {name}</h1>
            <p className="text-gray-400 text-[12px]"> Keep Training, Keep unlocking.</p>
        </div>
    )
}
export default Welcome

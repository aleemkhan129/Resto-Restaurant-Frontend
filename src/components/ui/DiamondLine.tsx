import { FaDiamond } from "react-icons/fa6";

export default function DiamondLine(){
    return(
        <div className="flex flex-row items-center w-[95%]">
            <FaDiamond size={10}/>
            <div className="flex-grow border-t border-black w-full"></div>
            <FaDiamond size={10}/>
            </div>
    )
}
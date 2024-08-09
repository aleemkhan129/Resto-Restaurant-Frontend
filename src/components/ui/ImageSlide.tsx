import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export default function ImageSlide(){
    return(
        <div className="relative">
             <Image src={"/korean-dish.png"} width={450} height={800} alt="" className=""/>
             <div className="flex gap-5 bg-white absolute bottom-0 right-0">
                <button><HiArrowLongLeft size={50}/></button>
                <button><HiArrowLongRight size={50}/></button>
             </div>
        </div>
    )
}
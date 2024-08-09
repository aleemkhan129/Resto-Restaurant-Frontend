import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdHeadsetMic } from "react-icons/md";
import ImageSlide from "../ui/ImageSlide";
import Btn from "../ui/Btn";
import Link from "next/link";
const Josefin = Josefin_Sans({
    subsets:["latin"],
    weight:"300"
})
export default function Hero(){
    return(
        <div className={`flex flex-col md:flex-row gap-10 place-items-center ${Josefin.className} p-10`}>
            <div className="flex flex-col gap-20 md:mx-20 w-full md:w-1/2  place-items-center" >
                <h1 className="text-[38px] md:text-[48px]">Comida casera, saludable y <span className="text-[#2A9D8F]">vegana.</span></h1>
                <div className="flex w-full gap-10">
                    <Link href={"#menu"}><Btn name={"Ver Menu"} bgColor={"E76F51"} textColor="ffffff"/></Link>
                    <button className="text-[20px]">Local Cerca</button>
                </div>
                <div className="grid grid-cols-3 md:gap-10 divide-x-2 divide-black font-bold divide-solid text-[20px]  w-full">
                    <span className="flex flex-col items-center"><FaLeaf size={40}/><h1>Fresco</h1></span>
                    <span className="flex flex-col items-center"><IoIosRocket size={40} /><h1>Rapido</h1></span>
                    <span className="flex flex-col items-center"><MdHeadsetMic size={40} /><h1>Soporte</h1></span>
                </div>
            </div>
            <div>
                <ImageSlide/>
            </div>
        </div>
    )
}
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Chefframe({name,designation,img}:any){
    return(
        <div className="flex relative  place-content-center ">
            <Image src={img} width={350} height={600} alt=""/>
            <div className=" flex flex-col absolute  bg-white bottom-[5%]  items-center w-[80%] h-[20%] p-2">
                <h1 className="text-[22px] font-bold">{name}</h1>
                <h1 className="text-[20px]">{designation}</h1>
                <div className="flex flex-row gap-5">
                    <FaInstagram size={20} color="#0A66C2"/>
                    <FaLinkedin size={20} color="#0A66C2"/>
                    <FaXTwitter size={20}/>

                </div>
            </div>
        </div>
    )
}
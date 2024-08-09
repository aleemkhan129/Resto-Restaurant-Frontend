import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";


export default function Testimonialcard(){
    return(
        <div className="relative text-white text-start">
            <Image src={"/bg-testimoney.png"} width={1200} height={566} alt="" className="[width:350px] [height:400px] [object-fit:cover] md:w-full md:h-full"  />
            <div className="flex flex-col absolute place-items-center justify-evenly   bottom-0 w-full h-full p-5">
                <FaQuoteLeft size={50} color="white"/>
                <p className="text-[18px] md:text-[36px] ">Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad</p>
                <h1 className="text-[20px] font-bold">Matias Sosa</h1>
                <div className="flex flex-row gap-5">
                    <div className=" w-[10px] h-[10px] rounded-full border border-white bg-white "></div>
                    <div className=" w-[10px] h-[10px] rounded-full border border-white  "></div>
                </div>
            </div>
        </div>
    )
}
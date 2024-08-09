import { Josefin_Sans } from "next/font/google"
import Image from "next/image"
import Chefframe from "../ui/Chefframe"

const Josefin = Josefin_Sans({
    subsets:["latin"],
    weight:"300"
})
export default function Experts(){
    return(
        <div className={`flex flex-col gap-10 ${Josefin.className} place-items-center text-center m-10`}>
            <div>
                <h1 className="text-[24px] text-[#E76F51] font-bold">Testimonio</h1>
                <Image src={"heading-experts.svg"} width={311} height={50} alt=""/>
            </div>
            <div className="flex flex-col gap-10 md:justify-evenly md:flex-row md:w-[90%] ">
                <Chefframe name="Rodrigo Russo" designation="Chef" img="/rodrigo.png" />
                <Chefframe name="Maria Olivos" designation="Chef" img="/maria.png"/>
                <Chefframe name="Fabiano Caruana" designation="Fundador" img="/fabiano.png"/>
            </div>
        </div>
    )
}
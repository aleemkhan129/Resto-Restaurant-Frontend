import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Testimonialcard from "../ui/Testimonialcard";
const Josefin = Josefin_Sans({
    subsets:["latin"],
    weight:"300"
})
export default function Testimonial(){
    return(
        <div className={`flex flex-col gap-10 ${Josefin.className} place-items-center text-center m-10`}>
            <div>
                <h1 className="text-[24px] text-[#E76F51] font-bold">Testimonio</h1>
                <Image src={"heading-testimonial.svg"} width={311} height={50} alt=""/>
            </div>
            <Testimonialcard/>
        </div>
    )
}
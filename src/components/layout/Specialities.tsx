import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import SpecialItems from "../ui/SpecialItems";
import ImageFrame from "../ui/ImageFrame";
const Josefin = Josefin_Sans({
    subsets:["latin"],
    weight:"300"
})
export default function Specialities(){
    return(
        <div className={`flex flex-col gap-10 bg-[#EFEFEF] place-content-center place-items-center ${Josefin.className} py-10 px-5`}>
            <div>
                <Image src={"heading-specialities.svg"} width={213} height={46} alt=""/>
                <h1 className="text-center text-[24px] text-[#E76F51]">de la casa</h1>
            </div>
                {/* <div className="flex flex-col md:flex-row gap-5 md:px-20 items-center"> */}
            <div className="flex flex-col gap-5  items-center md:grid grid-cols-2 md:px-20 items-center w-full">
                <div className="flex w-full bg-blue place-content-center"><SpecialItems name="Pastres" intro="Yogurt Griego con Semillas y Fresas" details="Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad" price="$150" /></div>
                <div className="flex w-full bg-blue- place-content-center"><ImageFrame img="/pastres.png"/></div>
                <div className="flex w-full bg-blue place-content-center md:order-last"><SpecialItems name="Almuerzo" intro="Sopa de Mani con garbanzo" details="Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad" price="$150"/></div>
                <div className="flex w-full bg-blue- place-content-center"><ImageFrame img="/vegan.png"/></div>
            </div>
        </div>
    )
}
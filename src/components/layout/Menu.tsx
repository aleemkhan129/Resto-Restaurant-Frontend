import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Cafesgrandes from "./Cafesgrandes";
const Josefin = Josefin_Sans({
    subsets:["latin"],
    weight:"300"
})
const items = [
    {
        title:"Desayuno",
        Desayanu:[{dishName:"Cafe con Leche",price:"$150",dishItems:"3 criollitos, Mermelada",img:"/coffee.png"}]
    },
    {
        title:"Almuerzo",
        Almuerzo:[{dishName:"Cafe con Leche",price:"$150",dishItems:"3 criollitos, Mermelada",img:"/coffee.png"}]
    },
    {
        title:"Merienda",
        Merienda:[{dishName:"Cafe con Leche",price:"$150",dishItems:"3 criollitos, Mermelada",img:"/coffee.png"}]
    }
]
export default function Menu(){
    
    return(
        <div id="menu" className={`flex flex-col gap-10 ${Josefin.className} place-items-center place-content-center m-10`}>
            <div>
                <Image src={"/heading-menu.svg"} width={108} height={49} alt=""/>
                <h1 className="text-[24px] text-[#E76F51]">Veganisimo</h1>
            </div>
            <div className="flex flex-col gap-10 md:flex-row">
                <Cafesgrandes title="Desayuno" allItems={items[0].Desayanu} />
                <Cafesgrandes title="Almuerzo" allItems={items[1].Almuerzo}/>
                <Cafesgrandes title="Merienda" allItems={items[2].Merienda}/>
            </div>
        </div>
    )
}
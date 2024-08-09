import Image from "next/image";
import Btn from "./Btn";

export default function ReservationForm(){
    return(
        <form action="" className="text-center flex flex-col items-center gap-10 w-full h-auto ">
            <div>
                <h1 className="text-[#E76F51] text-[24px] font-bold ">Te Esperamos</h1>
                <Image src={"/heading-reservation.svg"} width={233} height={52} alt=""/>
            </div>
            <div className="flex flex-col gap-10 w-full">
                <input type="text" className="rounded py-1.5 px-1" name="nombre" placeholder="Nombre"/>
                <input type="text" className="rounded py-1.5 px-1" name="nombre" placeholder="Nombre"/>
                <input type="text" className="rounded py-1.5 px-1" name="nombre" placeholder="Nombre"/>
                <div className="flex flex-row justify-between gap-5 ">
                    <input type="text" className="rounded w-1/2 py-1.5 px-1" name="fecha" placeholder="Fecha"/>
                    <input type="text" className="rounded w-1/2 py-1.5 px-1" name="hora" placeholder="Hora"/>
                    
                </div>
                <input type="text" className="rounded py-1.5 px-1" name="candidate" placeholder="Cantidad de Personas"/>
                <textarea name="message" id="" className="rounded py-1.5 px-1" placeholder="Mensaje " rows={5}></textarea>
            </div>
            <Btn name={"Encarger"} bgColor={"#2A9D8F"} textColor={"FFFFFF"} />
        </form>
    )
}
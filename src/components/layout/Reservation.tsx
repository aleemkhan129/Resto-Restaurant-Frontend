import Image from "next/image"
import ReservationForm from "../ui/ReservationForm"


export default function Reservation(){
    return(
        
            <div id="reservation" className="">
                <div className=" relative w-full  h-screen">
            <Image src={"/bg-reservation.png"} width={1440} height={735} alt="" className="md:w-full [width:390px] [height:816px] object-cover"/>
            <div className="absolute top-[20%] w-full h-auto md:right-[10%] bg-black opacity-75 md:w-[30%] md:h-auto  p-5">
                <ReservationForm/>
            </div>
        </div>
            </div>
    )
}
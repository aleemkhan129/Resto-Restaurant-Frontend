import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Footer(){
    return(
        <div className="flex flex-col p-16 gap-10 md:flex-row  bg-[#333333] relative top-[90px] md:top-56 text-white">
            <div className="flex flex-col gap-5 md:w-1/3 justify-between">
                <Image src={"logo-white.svg"} width={161} height={78} alt=""  />
                <p className="text-18">Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad</p>
                <p>2009 - 2022</p>
                <div className="flex flex-row justify-between">
                    <FaInstagram color="white" size={50}/>
                    <FaWhatsapp color="white" size={50}/>
                    <FaFacebookF color="white" size={50}/>
                    <FaXTwitter color="white" size={50}/>
                </div>
            </div>
            <div className="flex flex-col md:w-1/3 justify-between">
                <h1 className="text-[#E76F51] text-[24px]">Horarios</h1>
                <hr className="w-[60%]"/>
                <div className="grid grid-cols-2 gap-2">
                    <h1>Lunes</h1>
                    <h1>9:00 - 21:00</h1>
                    <h1>Martes</h1>
                    <h1>9:00 - 21:00</h1>
                    <h1>Miercoles</h1>
                    <h1>9:00 - 21:00</h1>
                    <h1>Jueves</h1>
                    <h1>9:00 - 21:00</h1>
                    <h1>Viernes</h1>
                    <h1>9:00 - 21:00</h1>
                    <h1>Sabado</h1>
                    <h1>9:00 - 21:00</h1>
                    <h1>Domingo</h1>
                    <h1>9:00 - 21:00</h1>
                </div>
                <h1 className="text-[#E76F51] text-[24px]">Telefono</h1>
                <hr className="w-[60%]"/>
                <h1 className="flex flex-row gap-2 items-center"><BiPhoneCall size={30}/>    +54 351 7608573</h1>
            </div>
            <div className="flex flex-col gap-2 md:w-1/3">
                <h1 className="text-[#E76F51] text-[24px]">Direccion</h1>
                <hr className="w-[50%]"/>
                <p className="flex flex-row items-center"><MdOutlineLocationOn size={30}/> Humberto Primo 771, Cordoba Capital, Bv Centro</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2490703977705!2d-64.19493822489746!3d-31.40726309580943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432998f71736435%3A0xc94218e75c52995c!2sConci%20Carpinella!5e0!3m2!1sen!2sae!4v1723031525936!5m2!1sen!2sae" width="300" height="300"   loading="lazy" className="rounded"></iframe>
            </div>

        </div>
    )
}
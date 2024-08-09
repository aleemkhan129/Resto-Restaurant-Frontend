"use client"
import { Libre_Franklin } from "next/font/google"

import Image from "next/image"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { IoMdPin } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BiFoodMenu } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
const libre_franklin = Libre_Franklin(
    {subsets:["latin"]}
);
export default function Navbar(){
    const [menuIcon,setMenuIcon] = useState(false);
    const handleNavigation = ()=>{
        setMenuIcon(!menuIcon)
    }
    
    return(
        <header className=" w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <nav>
                {/* large screen */}
                <div className="hidden md:block md:flex justify-evenly items-center py-5">
                    <Link href={"#"}>Contacto</Link>
                    <Link href={"#"}>Nosotoros</Link>
                    <Link href={"#"}><Image src="logo.svg" width={161} height={78} alt=""/></Link>
                    <Link href={"#menu"}>Menu</Link>
                    <Link href={"#reservation"}>Reservacion</Link>
                </div>
                {/* small screen */}
                <div className="md:hidden flex justify-between p-5 items-center">
                    <Image src={"logo.svg"} width={130} height={78} alt=""/>
                    <div onClick={handleNavigation}>
                        {menuIcon?<AiOutlineClose size={50}/>:<AiOutlineMenu size={50}/>}
                    </div>
                    <div className={menuIcon?
                        "md:hidden absolute top-[90px]  right-0 flex justify-center items-center w-full  text-center border-b-2 bg-white shadow-2xl text-black ease-in duration-300"
                        :
                        "md:hidden absolute top-0 right-[-100%]   flex justify-center items-center w-full   text-black text-center ease-in duration-300"}>
                        <div className="grid grid-cols-2 gap-5 font-light place-items-center w-full  text-2xl py-10 px-10">
                            <Link href={"#reservation"} onClick={handleNavigation}  className="place-self-start">Reservacion</Link>
                            <FiPhoneCall size={20} className="place-self-end"/>
                            <Link href={"#"} onClick={handleNavigation} className="place-self-start">Contacto</Link>
                            <IoMdPin size={20} className="place-self-end"/>
                            <Link href={"#menu"} onClick={handleNavigation} className="place-self-start">Menu</Link>
                            <BiFoodMenu className="place-self-end"/>
                            <Link href={"#"} onClick={handleNavigation} className="place-self-start col-span-2">Nosotoros</Link>
                            
                            <div className="flex justify-evenly w-full col-span-2">
                                <Link href={"#"}>
                                    <FaInstagram />
                                </Link>
                                <Link href={"#"}>
                                    <TiSocialFacebook />
                                </Link>
                                <Link href={"#"}>
                                    <FaWhatsapp />
                                </Link>
                                <Link href={"#"}>
                                    <FaXTwitter />
                                </Link>

                            </div>
                        </div>      
                    </div>
                </div>
            </nav>
        </header>
    )
}
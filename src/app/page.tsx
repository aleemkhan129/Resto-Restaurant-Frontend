import Experts from "@/components/layout/Experts";
import Hero from "@/components/layout/Hero";
import Menu from "@/components/layout/Menu";
import Reservation from "@/components/layout/Reservation";
import Specialities from "@/components/layout/Specialities";
import Testimonial from "@/components/layout/Testimonial";
import { Josefin_Sans } from "next/font/google";
const Josefin = Josefin_Sans({
  subsets:["latin"],
  weight:"300"
})
export default function Home(){
  return(
    <div className={`mt-[100px] md:mt-[120px] ${Josefin.className}`}>
      <Hero/>
      <Specialities/>
      <Menu/>
      <Testimonial/>
      <Experts/>
      <Reservation/>
    </div>
  )
}
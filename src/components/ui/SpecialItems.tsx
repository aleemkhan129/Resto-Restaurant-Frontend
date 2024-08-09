import Btn from "./Btn";

export default function SpecialItems({name,intro,details,price}:any){
    return(
        <div className="flex flex-col gap-10 md:w-1/2">
           <div className="flex flex-col gap-2">
                <h1 className="text-[20px] text-[#E76F51]">{name}</h1>
                <hr className="w-[90%] border-0 h-[1px] bg-black"/>
                <h1 className="text-[36px]">{intro}</h1>
                <hr className="w-[80%] border-0 h-[1px] bg-black"/>
                <p className="text-[18px]">{details}</p>
           </div>
            <div className="flex flex-row md:flex-col justify-evenly items-center md:items-start gap-5">
                <h1 className="text-[24px]">{price}</h1>
                <Btn name="Encarger" bgColor="2A9D8F" textColor="FFFFFF"/>
            </div>
        </div>
    )
}
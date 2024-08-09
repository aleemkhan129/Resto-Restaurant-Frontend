export default function Btn({name,bgColor,textColor}:any){
    return(
        <button className={`rounded-lg shadow-2xl px-5 py-2 bg-[#2A9D8F] text-white text-[20px]`}>{name}</button>
    )
}
import Image from "next/image";

export default function Cafecito({dishName,price,dishItems,img}:any){
    return(
        <div className="grid grid-cols-3 items-center gap-0">
            <Image src={img} width={99} height={99} alt="" className="row-span-2"/>
            <h1 className="font-bold">{dishName}</h1>
            <h1>{price}</h1>
            <h1>{dishItems}a</h1>
        </div>
    )
}
import Cafecito from "../ui/Cafecito";
import DiamondLine from "../ui/DiamondLine";

export default function Cafesgrandes({title,allItems}:any){
    const {dishName,price,dishItems,img} = allItems[0]
    
    return(
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-[42px] font-bold ">{title}</h1>
            <Cafecito dishName={dishName} price={price} dishItems={dishItems} img={img}/>
            <DiamondLine />
            <Cafecito dishName={dishName} price={price} dishItems={dishItems} img={img}/>
            <DiamondLine/>
            <Cafecito dishName={dishName} price={price} dishItems={dishItems} img={img}/>
        </div>
    )
}
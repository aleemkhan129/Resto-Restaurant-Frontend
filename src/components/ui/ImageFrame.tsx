import Image from "next/image";

export default function ImageFrame({img}:any){
    return (
        <div>
            <Image src={img} width={463} height={695} alt=""/>
        </div>
    )
}
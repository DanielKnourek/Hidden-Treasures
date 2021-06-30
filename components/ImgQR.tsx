import { FC, useState } from "react";
import Image from 'next/image'

import { createImg } from '/pages/api/QR/createImg/[message]';


async function ImgQR(): Promise<any> {
    const [imageSrc, setImageSrc] = useState("");

    setImageSrc(createImg("Hello world!"))
    // setImageSrc()

    return(
        <Image src={imageSrc} alt="QR code" width={500} height={500}/>
    )
    //     <>
        
    //     {/* <Image src={imageSrc}/> */}
    //     </>
    // )
}

export {ImgQR};
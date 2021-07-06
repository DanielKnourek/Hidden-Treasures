import QRCode from 'qrcode'
import { ReactFragment, useRef, useState } from 'react'

import {ImgQR} from '../../components/ImgQR'

function Page_code(): ReactFragment{
    // https://www.npmjs.com/package/qrcode
    

    return(<>
        <h1>Toto je můj kód</h1>
        <ImgQR message="Hello daniel22" width={500} height={500}/>
    </>)
}

export default Page_code;
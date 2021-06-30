import QRCode from 'qrcode'
import { ReactFragment, useRef, useState } from 'react'

function Page_code(): ReactFragment{
    // https://www.npmjs.com/package/qrcode

    const [qrCodePicture, setQrCode] = useState("");
    
    const canvasRef = useRef(null)
    let qrCanvas = <canvas ref={canvasRef}></canvas>
    const canvasObj: any = canvasRef.current;
    // console.log(canvasObj.getContext('2d'))
    let ctx = canvasObj.getContext('2d')
    const imgQR = new Image()
    imgQR.src = qrCodePicture;
    ctx.drawImage(imgQR, 0,0)
    const getCanvasRenderingContext2D = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
      const context = canvas.getContext('2d')
  
      if (context === null) {
          throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
      }
  
      return context;
  }
    // qrCanvas.drawImage()

    QRCode.toDataURL('I am a pony!')
    .then(url => {
      // console.log(url)
      setQrCode(url)
      // console.log(canvasObj)
      // canvasObj.drawImage(url, 0,0)
      
    })
    .catch(err => {
      console.error(err)
    })
    

    return(<>
    <script src="http://localhost:8097"></script>
        <h1>Toto je můj kód</h1>
        {qrCanvas}
        <p>{qrCodePicture}</p>
    </>)
}

export default Page_code;
import { NextApiRequest, NextApiResponse } from "next";

import QRgenerator from 'qrcode'

class ImageCreationError extends Error{
  constructor(...params: any[]){
    super(...params)
    if ( Error.captureStackTrace){
      Error.captureStackTrace(this, ImageCreationError)
    }
    const cause: string = "Could not create image";
  }
}

export async function createImg(message: string): Promise<string> {
  return await QRgenerator.toDataURL(message)
  .then(imageData => {
    return imageData.toString();
  })
  .catch(err => {
    throw new ImageCreationError();
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if( !req.query.hasOwnProperty('message')){
      return res.status(400).send("Missing [message] parameter!");
    }

    let imageData: string = "";
    try{
      imageData = await createImg(req.query.message.toString());
    }catch(err: any){
      return res.status(404).send("Unable to create image");
    }
    res.status(200).json({success: true, image: imageData})
  }
  
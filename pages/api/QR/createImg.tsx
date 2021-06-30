import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

import QRgenerator from 'qrcode'

async function createImg(message: string): Promise<string | boolean> {
  return await QRgenerator.toDataURL(message)
  .then(imageData => {
    return imageData.toString();
  })
  .catch(err => {
    return false;
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req);
    if( !req.query.hasOwnProperty('message')){
      return res.status(400).send("Missing [message] parameter!");
    }
    let imageData: string | boolean = await createImg(req.query.message.toString());
    if( !imageData ){
      return res.status(404).send("Unable to create image");
    }
    res.status(200).json({success: true, image: imageData})
  }
  





import opentype from "opentype.js" ;

import download from "./download.mjs" ;

import generate from "./otfe.mjs";




 

(/** @type {(options: { dts: number } ) => void} */ ({ dts, }) => {
  ;

  const {
    font ,
    fontFamilyName ,
    intendedFName ,
  } = generate({ dts: dts }) ;

  const intendedFPath = `J:\\Dev\\${intendedFName}` ;

  {
    ;

    console.log(`downloading to ${intendedFPath } `) ;

    // font.toBuffer();
    download((() => { const b1 = font.toBuffer() ; return new DataView(b1) } )(), {
      filePath: intendedFPath ,
    } )
    ;
  }
})({ dts: Date.now() })



console.log(`done`) ;














// import opentype from "opentype.js" ;

import generate from "./otfe.mjs";




 

const urlS = (/** @satisfies {(options: { dts: number } ) => {} } */ ( ({ dts, }) => {
  ;

  const {
    font ,
    fontFamilyName ,
    intendedFName ,
  } = generate({ dts: dts }) ;

  return (
    URL.createObjectURL((
      new Blob([font.toArrayBuffer()], { type: "font/ttf", } )
    ) )
  ) ;
}) )({ dts: Date.now() }) ;

export default new URL(urlS) ;



console.log(`done`) ;









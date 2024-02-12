

"use client";



import registerCssFontFace from "./registerCssFontFace.mjs"



import mainOtfUrl from "otf-export/otfDemo.mjs" ;

console.log({ mainOtfUrl, }) ;


const {
  finallyAssignedName: ffn ,
} = registerCssFontFace({ src: mainOtfUrl.href!, intendedName: "KIFF", }) ;


const KIFF = (() => {
  ;

  return (
    <div style={{ fontFamily: `${ffn}`, }}>
      <p>
      ffn The quick
      </p>
    </div>
  ) ;
}) ;

export const OtfExportDemoComponent = () => {
  return <KIFF />
} ;

export default OtfExportDemoComponent ;













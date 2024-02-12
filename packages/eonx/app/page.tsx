
import * as React from "react" ;







export default function App() {
  ;
  const c = (
    <div>
      <h1>
        Your Own Book Projects!
      </h1>
      <p>
        you need to start your first book project.
      </p>
      <p>
        you need to start your first book project.
      </p>
      <p>
        you need to start your first book project.
      </p>
      <p>
        you need to start your first book project.
      </p>
      <OtfExportDemoComponent />
      <form>
        <button type="button">
          Start First Book Project
        </button>
      </form>
    </div>
  ) ;
  return (
    <div style={{ display: "block flow-root", paddingBlock: "2em 3em", paddingInline: "1em 3em", minBlockSize: "45em" }} >
        { c }
    </div>
  ) ;
} ;




import dynamicComponent from "next/dynamic";




// import OtfExportDemoComponent from "../components/otfExportDemoComponent";

const OtfExportDemoComponent = dynamicComponent(() => import("../components/otfExportDemoComponent") , { ssr: false, } )

// import mainOtfUrl from "otf-export/otfDemo.mjs" ;

// console.log({ mainOtfUrl, }) ;


// const KIFF = (() => {
//   ;

//   const l = () => {
//     ;
    
//     const {
//       font ,
//       fontFamilyName ,
//       intendedFName ,
//     } = generateMainOtf({ dts: Date.now() }) ;

//   }
// })() ;










import Files from "node:fs" ;
import FilePath from "node:path" ;





/**
 * 
 * simulates, or invokes, Browser File Download action.
 * 
 */
export const download = /** @satisfies {(...args: [data: Buffer | DataView, options: { filePath: string } ]) => void } */ (function (data, { filePath: filePathSpec, } ) {
   ;

   return (async () => {
      ;
      
      // for (const downloadInElectron of (() => {
      //    try {
      //       const dlButton = document.createElement("a") ;
      //       dlButton.download = filePathSpec ;
      //       const l =
      //       dlButton.href = () => {} ;
      //    }
      // })() )
      // {
      //    return downloadInElectron(data, { filePath: filePathSpec, }) ;
      // }

      for (const downloadInElectron of await import("./downloadInElectron.mjs").then(({ default: e, }) => [e], e => (console.info(e) , [] ) ) )
      {
         return downloadInElectron(data, { filePath: filePathSpec, }) ;
      }

      throw new TypeError("unsupported operation") ;
   })() ;
}) ;

export default download ;








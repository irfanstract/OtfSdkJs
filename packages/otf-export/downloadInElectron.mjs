

import Files from "node:fs" ;
import FilePath from "node:path" ;





/**
 * 
 * simulates, or invokes, Browser File Download action.
 * 
 */
export const download = /** @satisfies {(...args: [data: Buffer | DataView, options: { filePath: string } ]) => void } */ (function (data, { filePath: filePathSpec, } ) {
   ;
   const filePath = FilePath.resolve(filePathSpec ) ;
   console.log(`downloading to '${filePathSpec }' hence '${filePath }' `) ;

   return Files.writeFileSync(filePath, data, {
      // TODO
   } ) ;
}) ;

export default download ;








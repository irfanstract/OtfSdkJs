


export {} ;





/**
 * @type {{ (...args: [msg: string] | [] ): never ; } }
 * 
 */
function athrow(...args) {
  throw new TypeError(...args )
}
export { athrow, } ;


/** 
 * @typedef {Dts } Date
 */
/** 
 * @type {() => Date }
 */
const Date = () => globalThis.Date.now()
export { Date, } ;


import XJSON from "eonx-document-ui/src/typeAwareJson";
export { XJSON, } ;










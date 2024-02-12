
"use client" ;




export {} ;




import { athrow, XJSON } from "eonx-document-ui/src/genericXda.mjs";




export class CompareAndUpdateMismatchError extends TypeError {}
export const CompareAndUpdateMismatchException = CompareAndUpdateMismatchError





import React from "react";





;

/** 
 * `useProgrammaticRefresh`
 * 
 * guarantee:
 * same function obj for the enclosing component lifetime (but not the enclosing tuple or struct).
 * 
 */
export const useProgrammaticRefresh = () => {
  const [_, s] = React.useReducer(_ => Symbol() , Symbol() ) ;
  return /** @satisfies {[{}, {}]} */ ([s, s]) ;
} ;

/** 
 * `useProgrammaticRefresh`
 * 
 * guarantee:
 * for given `code`,
 * same (re)constructed obj for the enclosing component lifetime.
 * 
 */
export const useXJsonParse = (
  /**
   * @satisfies {<Mdl>(code: string & XJSON.AsEncodedFrom<Mdl> ) => Mdl }
   */
  ((code) => React.useMemo(() => XJSON.parse(code) , [code] ) )
) ;








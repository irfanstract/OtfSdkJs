
"use client" ;




export {} ;




import {
  athrow,
  // @ts-ignore
  Date ,
  XJSON ,
} from "eonx-document-ui/src/genericXda.mjs";




import {
  CompareAndUpdateMismatchError ,
  CompareAndUpdateMismatchException ,
} from "./uprc.mjs";

export {
  CompareAndUpdateMismatchError ,
  CompareAndUpdateMismatchException ,
} ;

/** @type {(e: Error) => e is CompareAndUpdateMismatchError } */
function isSpclCompareAndUpdateMismatchExceptionEvent(e) {
  return e instanceof CompareAndUpdateMismatchError ;
}

export { isSpclCompareAndUpdateMismatchExceptionEvent, }





import React from "react";

import {
  useProgrammaticRefresh ,
  useXJsonParse ,
} from "eonx-document-ui/src/uprc.mjs";




// import RDC from "react-dom/client";




// /** 
//  * @typedef {Object} SpclLSeViewMethodNames
//  * @property {null | {} } value
//  * @property {Date } tStamp the t-stamp associated with `value`
//  * @property {Function } compareAndUpdate
//  * 
//  */

/** 
 * `useLocalStorageEntryView`
 * 
 * guarantee:
 * same function obj for the enclosing component lifetime (but not the enclosing tuple or struct).
 * 
 */
export const useLocalStorageEntryView = (
  /** @satisfies {(...args: any[] ) => {} } */
  ((function R1(mode = 1 ) {
    //

    const getUpdatedValue = /** @satisfies {(key: string) => unknown } */ ((key) => (localStorage.getItem(key) ?? "" ) )

    const compareAndUpdate1 = (
      /** @satisfies {(options: { key: string ; expectedVal: string ; newVal: string ; } ) => (string | null) } */
      (({ key, expectedVal, newVal, }) => {
        //
        
        const acualVal = getUpdatedValue(key) ;
        
        if (acualVal === expectedVal ) {
          localStorage.setItem(key, newVal)
          return newVal ;
        } else {
          /** `throw` new `TypeError`, and then `return expectedVal` */
          throw new CompareAndUpdateMismatchError(`[compareAndUpdate] mismatch ; ${JSON.stringify({ expectedVal, acualVal, newVal }) } `)
          return acualVal ;
        }
      })
    )

    /**
     * the constantly-updated value parsed via `XJSON.parse`
     * 
     */
    const useSpclUpdatedStoredValueParsed = /** @satisfies {(...args: Parameters<{ (key: string, options?: { refreshMillis : number ; }): void ; }> ) => ({} | null) } */ ((...[key , { refreshMillis, } = { refreshMillis: 5 * 1000, } ]) => (
      //
      
      (
        /** see https://react.dev/reference/react/useSyncExternalStore . */
        (() => {
          ;

          /**
           * cannot safely make this directly return `object`s
           * due to the way `useSyncExternalStore` examine chgs ;
           * needs to make this `string` instead .
           * also
           * needs to put in `useCallback` this way
           * 
           */
          const c1 = (
            React.useSyncExternalStore((
              //
              React.useCallback(propagateChgEvt => {
                const id = setInterval(propagateChgEvt, refreshMillis ) ;
                return () => clearInterval(id) ;
              } , [] )
            ) , () => XJSON.stringify({ value: getUpdatedValue(key), tStamp: Date() }) )
          ) ;

          const c2 = (
            /** `XJSON.parse(c1)` */
            useXJsonParse(c1)
          ) ;

          return c2 ;
        })()
      )
    )) ;

    /** 
     * @typedef {Object} SpclVtuOpsBasePre
     * @property {string } value
     * @property {Date } tStamp the main disting
     * @property {ICompareAndSetFnc<string> } compareAndUpdate
     * 
     */

    return (/** @satisfies {() => (key: string) => SpclVtuOpsBasePre } */ (() => {
      ;

      const useSpclProgrammaticRefresh = () => {
        ;
        
        const [_, refresh] = useProgrammaticRefresh() ;

        const {
          refreshForCmpAndAsgnEffect ,
        } = (
          React.useMemo(() => ({
            refreshForCmpAndAsgnEffect: () => (
              setTimeout(refresh, 230 )
            ) ,
          }) , [refresh, ] )
        ) ;

        return {
          refresh ,
          refreshForCmpAndAsgnEffect ,
        } ;
      } ;
      
      switch (mode) {
        //

        case 0 :
          return /** */ (key) => {
            ;

            const {
              refresh ,
              refreshForCmpAndAsgnEffect ,
            } = useSpclProgrammaticRefresh() ;

            const value0 = getUpdatedValue(key) ;

            return {
              value: value0
              ,
              tStamp: React.useMemo(() => Date() , [value0] )
              ,
              compareAndUpdate: (
                React.useCallback((expectedVal, newVal) => {
                  try {
                    return compareAndUpdate1({
                      key,
                      expectedVal,
                      newVal,
                    }) ;
                  }
                  finally { refreshForCmpAndAsgnEffect() ; }
                } , [compareAndUpdate1, key, refreshForCmpAndAsgnEffect, ] )
              ) ,
            } ;
          } ;
          
        default: {
          ;
          
          const OR_MAYBE_NONEMPTY = /** @satisfies {<T extends (string | false | null) >(value: T) => string } */ ((...[s]) => (s || "") ) ;

          return /** */ (key) => {
            ;
            
            const {
              refresh ,
              refreshForCmpAndAsgnEffect ,
            } = useSpclProgrammaticRefresh() ;

            const { value: s, tStamp, } = (
              useSpclUpdatedStoredValueParsed(key )
            ) ;

            return {
              value: OR_MAYBE_NONEMPTY(s)
              ,
              tStamp,
              compareAndUpdate: (
                React.useCallback((expectedVal, newVal) => {
                  try {
                    return compareAndUpdate1({
                      key,
                      expectedVal: OR_MAYBE_NONEMPTY(expectedVal)
                      ,
                      newVal,
                    }) ;
                  }
                  finally { refreshForCmpAndAsgnEffect() ; }
                } , [compareAndUpdate1, key, refreshForCmpAndAsgnEffect, ] )
              ) ,
            } ;
          } ;
        }
      }
    }) )() ;
  })())
) ;









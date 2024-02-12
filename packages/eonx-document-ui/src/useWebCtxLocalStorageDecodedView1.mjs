
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





import React from "react";





;

import {
  useProgrammaticRefresh ,
  useXJsonParse ,
} from "eonx-document-ui/src/uprc.mjs";

import {
  isSpclCompareAndUpdateMismatchExceptionEvent,
  useLocalStorageEntryView ,
} from "eonx-document-ui/src/useWebCtxLocalStorageRawView.mjs";

/** 
 * `XJSON` version of `useLocalStorageEntryView`
 * 
 * guarantee:
 * same function obj for the enclosing component lifetime (but not the enclosing tuple or struct).
 * 
 */
export const useLocalStorageEntryXJsnDecodedView = (
  /** @satisfies {<Md>(...args: [key: string]) => {} } */ (/** @template {{} | null} Md */ (...args) => {
    const {
      value: rawValue ,
      compareAndUpdate: compareAndUpdateRaw,
      ...c0
    } = useLocalStorageEntryView(...args)

    /** @type {Md | null } */
    const value = (
      /** `XJSON.parse(rawValue )` */
      useXJsonParse(/** @type { XJSON.AsEncodedFrom<Md | null> & string } */ (rawValue || String(null) ) )
    ) ;

    const compareAndUpdate = (
      React.useCallback(/** @type { ICompareAndSetFnc<Md | null> } */ (...[expectedV, newV]) => {
        const c1 = compareAndUpdateRaw((
          // TODO
          ((expectedV !== null ) ? XJSON.stringify(expectedV) : "" )
        ), XJSON.stringify(newV) )
        return XJSON.parse(c1) ;
      } , [compareAndUpdateRaw, ] )
    ) ;

    return /** @satisfies {{ [k in keyof ReturnType<typeof useLocalStorageEntryView> ] ?: null | {} } & { value: Md | null ; } } */ ({
      ...c0 ,
      value: value ,
      compareAndUpdate: compareAndUpdate ,
    }) ;
  } )
) ;

/**
 * `useLocalStorageEntryXJsnDecodedViewAltPre` - to implement `usePeriodicSave`.
 * internal only ; made public, necessary for debugging.
 * 
 * guarantee:
 * same function obj for the enclosing component lifetime (but not the enclosing tuple or struct).
 * 
 */
export const useLocalStorageEntryXJsnDecodedViewAltPre = (
  /** @satisfies {<M extends {}>(...args: Parameters<typeof useLocalStorageEntryXJsnDecodedView > ) => { [key: string] : {} | null ; } } */
  (
    /** @template {{} } M */
    (...[ikey]) => {
      ;
      
      /**
       * @typedef {Object } BigM
       * @property {M} value
       * @property {Date } tStamp
       */

      const xjpUnmemoised = /** @satisfies {(code: string) => BigM} */ ((...[c]) => XJSON.parse(c) ) ;

      {
        ;
        
        // const ikey = "i need some local storage" ;
        
        const lseHookReturnValue = (
          /** @satisfies {{ value: BigM | null }} */ (useLocalStorageEntryXJsnDecodedView(ikey) )
        ) ;

        const {
          compareAndUpdate: compareAndUpdateTimestamped,
          tStamp: hkTStamp0 ,
        } = lseHookReturnValue ;

        /**
         * trying to do
         * `{ value: existingValue, tStamp: existingTStamp, } = lseHookReturnValue.value || { value: null, tStamp: null, } `
         * --
         * until
         * (both https://github.com/microsoft/TypeScript/issues/35873 and https://github.com/microsoft/TypeScript/issues/30581 )
         * gets addressed,
         * we can't just omit this intermediate alias
         * 
         */
        const existingMvnt = lseHookReturnValue.value || { value: null, tStamp: null, } ;

        const { value: existingValue = null, tStamp: existingTStamp = null } = existingMvnt ;

        const compareAndUpdateValueOnly = (
          React.useCallback(/** @satisfies {ICompareAndUpdateFnc<M | null> } */ (
            (expectedExistingValue, intendedNewValue) => {
              ;
              // TODO
              {
                ;
                
                const newTStamp = Date() ;

                const c2 = (
                  compareAndUpdateTimestamped(
                    (existingTStamp && expectedExistingValue) ? { tStamp: existingTStamp, value: expectedExistingValue } : null
                    ,
                    intendedNewValue ? { tStamp: newTStamp, value: intendedNewValue } : null )
                ) ;
                const { value: finalActualValue2 = null,   } = c2 || {} ;

                return finalActualValue2 ;
              }
            }
          )  , [compareAndUpdateTimestamped, existingTStamp])
        ) ;

        return {
          existingValue ,
          existingTStamp ,
          compareAndUpdateValueOnly ,
          ikey ,

          /* INTERNAL-ONLY */

          compareAndUpdateTimestamped ,
          lseHookReturnValue ,
        } ;
      }
    }
  )
) ;

/**
 * `useLocalStorageEntryXJsnDecodedViewAlt`.
 * 
 * guarantee:
 * same function obj for the enclosing component lifetime (but not the enclosing tuple or struct).
 * 
 */
export const useLocalStorageEntryXJsnDecodedViewAlt = (
  /** @satisfies {<M extends {}>(...args: Parameters<typeof useLocalStorageEntryXJsnDecodedViewAltPre >) => object } */
  (
    /** @template {{}} M */
    (...args1) => {
      ;

      const {
        existingValue ,
        existingTStamp ,
        compareAndUpdateValueOnly ,
      } = /** @satisfies {{ existingValue: M | null } } */ (
        useLocalStorageEntryXJsnDecodedViewAltPre(...args1 )
      ) ;

      return /** @satisfies {[typeof existingValue, object ]} */ ([existingValue, {
        value: existingValue ,
        tStamp: existingTStamp ,
        //
        compareAndUpdate: compareAndUpdateValueOnly ,
      } ]) ;
    }
  )
) ;







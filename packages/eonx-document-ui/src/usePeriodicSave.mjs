
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

import {
  LocalStorageEntryView1 ,
} from "eonx-document-ui/src/useWebCtxLocalStorageRawViewDemo.mjs";

import {
  useLocalStorageEntryXJsnDecodedView,
  useLocalStorageEntryXJsnDecodedViewAltPre ,
  useLocalStorageEntryXJsnDecodedViewAlt ,
} from "eonx-document-ui/src/useWebCtxLocalStorageDecodedView1.mjs";

export {
  useLocalStorageEntryXJsnDecodedView,
  useLocalStorageEntryXJsnDecodedViewAltPre ,
  useLocalStorageEntryXJsnDecodedViewAlt ,
} ;

/**
 * `usePeriodicSave`.
 * 
 * guarantee:
 * same function obj for the enclosing component lifetime (but not the enclosing tuple or struct).
 * 
 */
const usePeriodicSave = (
  // TODO
  () => athrow("TODO")
) ;

/**
 * `LocalStorageEntryParsedViewDebug`
 * 
 * @todo rename
 */
export const LocalStorageEntryView = /** @satisfies {(props: { ikey: string ; } ) => React.ReactElement } */ (({ ikey, }) => {
  ;
  return useLsevAltCudb({ ikey, }).fullDisplayComp ;
}) ;

import {
  // @ts-ignore
  LsevCudbOpsProto,
  useLsevCudbPck,
} from "./useWebCtxLocalStorageRawViewDemo.mjs";

const useLsevAltCudb = /** @satisfies {(props: { ikey: string ; } ) => {} } */ (({ ikey, }) => {
  ;
  
  const [value , { tStamp, compareAndUpdate: compareAndSet, } ] = /** @satisfies {[{} | null, {} ] } */ (useLocalStorageEntryXJsnDecodedViewAlt(ikey ) ) ;

  const {
    compareAndSetToArbitraryContent ,
    updatingBtn ,
    dc ,
    fullDisplayComp ,
  } = (
    useLsevCudbPck({
      value, tStamp,
      // @ts-ignore
      compareAndSet,
    })
  ) ;

  return /** @satisfies {LsevCudbOpsProto & { fullDisplayComp: unknown ; } } */ ({
    value ,
    tStamp ,
    compareAndSet ,
    compareAndSetToArbitraryContent ,
    updatingBtn ,
    dc ,
    fullDisplayComp ,
  }) ;
}) ;

export const LocalStorageEntryViewDemo = /** @satisfies {(props: { ikey: string ; } ) => React.ReactElement } */ (({ ikey, }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      { [1,2].map(i => <span key={i}><LocalStorageEntryView ikey={ikey } /></span> ) }
    </div>
  )
}) ;










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
} from "./useWebCtxLocalStorageRawView.mjs";

import {
  /** for calls from React `componentDidCatch`es */
  isSpclCompareAndUpdateMismatchExceptionEvent ,
} from "./useWebCtxLocalStorageRawView.mjs";

export { isSpclCompareAndUpdateMismatchExceptionEvent, }






import React from "react";

import RDC from "react-dom/client";

import { showCriticalMessageElement, } from "./showBlockingDialogElement";





;

import {
  useProgrammaticRefresh ,
  useXJsonParse ,
} from "eonx-document-ui/src/uprc.mjs";

import { useLocalStorageEntryView, } from "./useWebCtxLocalStorageRawView.mjs";

/**
 * `LocalStorageEntryRawViewDebug`
 * 
 * @todo rename
 */
export const LocalStorageEntryView1 = /** @satisfies {(props: { ikey: string ; } ) => React.ReactElement } */ (({ ikey, }) => {
  ;

  const {
    value ,
    tStamp ,
    compareAndSet ,
    compareAndSetToArbitraryContent ,
    updatingBtn ,
    dc ,
    fullDisplayComp ,
  } = useLsevCudb({ ikey, }) ;

  return fullDisplayComp ;
}) ;

const useLsevCudb = /** @satisfies {(props: { ikey: string ; } ) => LsevCudbOpsProto } */ (({ ikey, }) => {
  ;

  const { value, tStamp, compareAndUpdate: compareAndSet, } = (
    useLocalStorageEntryView(ikey)
  ) ;

  const {
    compareAndSetToArbitraryContent ,
    updatingBtn ,
    dc ,
    fullDisplayComp ,
  } = useLsevCudbPck({ value, tStamp, compareAndSet, }) ;
  
  return {
    value ,
    tStamp ,
    compareAndSet ,
    compareAndSetToArbitraryContent ,
    updatingBtn ,
    dc ,
    fullDisplayComp ,
  } ;
}) ;



const useSpclDataSaveFailureDialog = /** @satisfies {(options : { what: string ; } ) => {} } */ (
  ({ what, }) => {
    const cb = (
      React.useCallback(() => {
        ;

        showCriticalMessageElement(({ close, }) => (
          //
          
          <div>
            
            <p>
              failed to save this edit.
            </p>
            <p>
              chances are you've got multiple devices accessing and editing the remote document, isn't it? <br/>
              multi-device editing is not fully supported yet ; <br/>
              ensure there's only one device, preferably this one, actively mking with the document, <br/>
              use functionality <i>Troubleshoot Save Failure: Reconcile</i>, and <br/>
              try again.
            </p>
            <p>
              the actual exception - which the <i>Save</i> op encountered - was:
              <i>{what }</i>
            </p>
            <button onClick={_ => close() } >
              <span style={{ fontVariantCaps: "titling-caps", }} >
              ignore
              </span>
            </button>
          </div>
        ) )
        
        return ;
      } , [] )
    ) ;

    return /** @satisfies {[Function, Function]} */ ([cb, cb]) ;
  }
) ;

/**
 * expands the given ctx, with these default impls.
 * 
 */
export const useLsevCudbPck = /** @satisfies {<Mdl extends {}>(props: ({ value: Mdl | null ; tStamp: Date | null, compareAndSet: ICompareAndSetFnc<Mdl> ; }) ) => LsevCudbOpsProto } */ (
  (...[{ value, tStamp, compareAndSet, }]) => {
    ;

    const enqueueOpaqueWritedownTask = /** @satisfies {<R>(c: () => R) => any } */ ((rerun) => {
      ;
      
      (async () => (
        rerun()
      ) )()
      .catch(z => {
        if (isSpclCompareAndUpdateMismatchExceptionEvent(z) ) {
          console.debug(z) ;
          console.info("CompareAndUpdateMismatchExceptionEvent", z.message ) ;
          showSpclKtsmDataSaveFailureDialog() ;
          return ;
        }
        else {
        }
        throw z ;
      } )
    }) ;

    const compareAndSetToArbitraryContent = () => (
      compareAndSet(
        // @ts-ignore
        value,
        globalThis.Date() )
    ) ;

    const [showSpclKtsmDataSaveFailureDialog, ] = (
      useSpclDataSaveFailureDialog({ what: "Known-Last-T-Stamp Mismatch" })
    ) ;

    const updatingBtn = (
      //
      <button
      type="button"
      title="assign it some arbitrary text content"
      onClick={_ => {
        enqueueOpaqueWritedownTask(() => compareAndSetToArbitraryContent() )
      } }
      >
        U!
      </button>
    ) ;
    const dc = (
      <code style={{ whiteSpace: "pre-wrap" }} >
        { value ? JSON.stringify(value ) : "(empty)" }
      </code>
    ) ;

    const fullDisplayComp = (
      <span>
        { dc }
        <span>
          <span style={{ fontSize: "75%" }} >
            (<span>last updated at {tStamp }</span> )
          </span>
          { updatingBtn }
        </span>
      </span>
    ) ;
  
    return /** @satisfies {(LsevCudbOpsProto & { value : {} | null }) & Record<String, null | {}> } */ ({
      value ,
      tStamp ,
      //
      compareAndSet ,
      compareAndSetToArbitraryContent ,
      enqueueOpaqueWritedownTask ,
      //
      updatingBtn ,
      dc ,
      //
      fullDisplayComp ,
    }) ;
  }
) ;

/**
 * @typedef {Object} LsevCudbOpsProto
 * @property {{} | null } value the main value, at the time of the hooks-call.
 * @property {{} | null } tStamp a t-stamp associated with the value.
 * @property {Function} compareAndSet attempts CompareAndSet, `throw`ing on failure.
 * @property {Function} compareAndSetToArbitraryContent
 * @property {React.ReactElement } updatingBtn a React JSX rendering of trigger to `compareAndSetToArbitraryContent` (maybe).
 * @property {React.ReactElement } dc a React JSX rendering of `value`
 * 
 */
/** `LsevCudbOpsProto`. `ts(1202)` and `ts(18043)` */
const LsevCudbOpsProto = {} ;
export { LsevCudbOpsProto , } ;







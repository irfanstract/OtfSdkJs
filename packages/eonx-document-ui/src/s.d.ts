/**
 * see https://stackoverflow.com/a/59688563 .
 * 
 */








// declare global {
//   //

//   //
// }

/**
 * signature of `compareAndSet` .
 * 
 */
declare type ICompareAndSetFnc<M> = {
  (expectedV: M, newValue: M): M ;
} ;

/**
 * alias of `ICompareAndSetFnc`.
 * 
 * @deprecated
 */
declare type ICompareAndUpdateFnc<M> = (
  ICompareAndSetFnc<M>
) ;

/**
 * return-value of `Date.now()`.
 * 
 */
declare type Dts<C = never > = (
  number & { M_DTS ?: unknown }
) ;









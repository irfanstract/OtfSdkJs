


export {} ;







/**
 * 
 * attempt of
 * typing
 * the `string`s
 * returned from, or intended as input to, the `JSON`'s `stringify` or `parse` methods
 * 
 */
export namespace XJSON
{
  //

  export interface AsEncodedFrom<out T>
  {
    /** 
     * without any additional properties,
     * we can't guarantee that the typechecker will not drop this `trait` from type-conjunctions (`&`).
     */
    _t_IsEncodedFrom ?: { c: T } ;
  }

  export const stringify: { <T>(v: T): (string & AsEncodedFrom<T>) } = (
    (struc1) => (
      JSON.stringify(struc1)
    )
  ) satisfies { <T>(v: T): (string & AsEncodedFrom<T>) } ;

  export const parse: { <T>(code: string & AsEncodedFrom<T>): T } = (
    (c) => JSON.parse(c)
  ) satisfies { <T>(code: string & AsEncodedFrom<T>): T } ;

}




export default XJSON ;










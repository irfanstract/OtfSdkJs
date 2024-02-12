





export {} ;






/* note: cannot safely ascribe `{}` as upper-bound in case of `@satisfies` due to the resulting `property does not exist` complaint */
export const registerCssFontFace = /** @satisfies {(options: { intendedName: string ; src: string ; } ) => Record<string, {}> } */ (({ intendedName, src: srcUrl, }) => {
  ;
  ;
  const finallyAssignedName = intendedName ;
  const finalCode = ` @font-face { font-family: ${JSON.stringify(finallyAssignedName) } ; src: url(${JSON.stringify(srcUrl) }) ; } ` ;
  console.log("registerCssFontFace", {
    intendedName ,
    srcUrl ,
    finallyAssignedName,
    finalCode ,
  } ) ;
  document.head.appendChild(document.createElement("style") ).textContent = finalCode ;
  return {
    finallyAssignedName,
    intendedName,
    srcUrl,
    finalCode,
  } ;
} ) ;

export default registerCssFontFace ;







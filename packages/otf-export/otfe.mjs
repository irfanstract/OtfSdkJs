/**
 * 
 * https://github.com/opentypejs/opentype.js#writing-a-font .
 * 
 */


import opentype from "opentype.js" ;

/**
 * @typedef {import("./Dts").Dts } Dts
 */




 

export default /** @satisfies {(options: { dts: Dts } ) => unknown } */ (({ dts, }) => {
  ;
  
  /**
   * Create the bézier paths for each of the glyphs.
   * Note that the .notdef glyph is required.
   */
  const notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    advanceWidth: 650,
    path: new opentype.Path()
  });

  const aPath = new opentype.Path();
  aPath.moveTo(100, 0);
  aPath.lineTo(100, 700);
  aPath.lineTo(700, 300);
  // more drawing instructions...
  const aGlyph = new opentype.Glyph({
    name: 'A',
    unicode: 65,
    advanceWidth: 650,
    path: aPath
  });
  const tGlyph = new opentype.Glyph({
    name: 'T',
    unicode: 84,
    advanceWidth: 650,
    path: aPath
  });

  const glyphs = [notdefGlyph, aGlyph, tGlyph];

  const fontFamilyName = `Open Type${dts }` ;

  const font = (
    new opentype.Font({
      familyName: fontFamilyName,
      styleName: 'Bold',
      unitsPerEm: 1000,
      ascender: 800,
      descender: -200,
      glyphs: glyphs})
  );

  console.log(`Font: ${fontFamilyName } `) ;

  const intendedFName = `fontforged_out_${dts.toFixed() }.ttf` ;

  return {
    intendedFName ,
    fontFamilyName ,
    font ,
  } ;
}) ;











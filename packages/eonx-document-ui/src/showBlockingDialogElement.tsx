
"use client" ;


export {} ;





import {
  athrow,
  Date ,
  // XJSON ,
} from "eonx-document-ui/src/genericXda.mjs";






import React from "react";

import RDC from "react-dom/client";






/**
 * a blocking message element intentionally hard to dismiss -
 * use cases on eg *critical technical problems*, *failed to save document*.
 * 
 */
export const showCriticalMessageElement : {
  (renderMainElement: SpclRenderFnc<{ close: { (): void ; } }> ): void ;
} = (
  ((renderElement) => {
    ;
    
    return doSCME(ScmeType.CRITICAL, renderElement )
  })
) ;

/**
 * wizard page
 * 
 */
export const showWizardPageElement : {
  (renderMainElement: SpclRenderFnc<{ close: { (): void ; } }> ): void ;
} = (
  ((renderElement) => {
    ;
    
    return doSCME(ScmeType.WIZARD, renderElement )
  })
) ;

/**
 * non-modal dialogue, usually for ignorable async stuffs
 * 
 */
export const showNotificativeElement : {
  (renderMainElement: SpclRenderFnc<{ close: { (): void ; } }> ): void ;
} = (
  ((renderElement) => {
    ;
    
    return doSCME(ScmeType.NOTIFICATION, renderElement )
  })
) ;

export const doSCME : {
  (typ: ScmeType, renderMainElement: SpclRenderFnc<{ close: { (): void ; } }> ): void ;
} = (
  ((typ, renderElement) => {
    ;
    
    const d = document.body.appendChild(document.createElement("dialog") ) ;

    function close(...a: Parameters<typeof HTMLDialogElement.prototype.close > )
    {
      d.close(...a ) ;
      d.remove() ;
    }
    if (typ === ScmeType.CRITICAL) {
      d.addEventListener("cancel", evt => { evt.preventDefault() ; } ) ;
    }

    const contents = renderElement({ close, }) ;
    
    RDC.createRoot(d)
    .render(contents)
    ;

    ((
      !!d.showModal
    ) && (typ !== ScmeType.NOTIFICATION ) ) ? d.showModal() : d.show() ;
  })
) ;

enum ScmeType
{
  CRITICAL = "!!" ,
  WIZARD = "w" ,
  NOTIFICATION = "msg" ,

  // ℹ✨☎⚠☏
}



interface SpclRenderFnc<Props extends {} >
{
  (props: Props ): JSX.Element ;
}










import React, { useState } from 'react'
import { BiPlus , BiMinus } from "react-icons/bi";

function Accordion({id,title,info}) {
    const [showInfo , setShow] = useState(false) ;
    return (
        <article className="faq-item">
              <div className="faq-head">
                  <p className="faq-title">{title}</p>
                  <span className="faq-icon" onClick={(e)=>setShow(!showInfo)}>
                      {
                         showInfo ? <BiMinus/> : <BiPlus/>
                      }
                    
                    </span>
              </div>
              <div className="faq-body">
              {
                  showInfo ? <p className="faq-detail">{info}</p> : ""
              }
                </div>
            </article>
    )
}

export default Accordion

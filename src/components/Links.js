import React from "react";
import { useState } from "react";

export default function Links() {
  const [classChanged, setClassChanged] = useState(false);

  function full(){
    setClassChanged(!classChanged);
  }

  return (
    <div>
      <div className={classChanged ? "links-div-after" : "links-div"}>
      
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
          <a className='links-div-a'> RBI Retail Direct portal</a>
          <a className='links-div-a'> Fair Lending Practice Code</a>
          <a className='links-div-a'> NRI Services</a>
          <a className='links-div-a'> SBI Express Remit</a>
      </div>
      <div id="btn-div">
      
          {classChanged ?
          <button id="link-btn" onClick={full}><i className="bi bi-caret-up-fill" style={{fontStyle:'none'}}></i>Less Links</button>
           :
           <button id="link-btn" onClick={full}><i className="bi bi-caret-down-fill" style={{fontStyle:'none'}}></i>More Useful Links</button>
          }
      </div>
    </div>
  );
}

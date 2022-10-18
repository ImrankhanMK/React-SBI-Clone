// header 
import React from 'react';
import sbi from '../images/sbi.PNG';
import sbionline from '../images/sbionline.PNG';

export default function Header() {
  return (
    <div className="header">
      <div><img src={sbi}></img></div>
      <div><img src={sbionline}></img></div>
    </div>
  )
}
// Navbar 
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><button>Service</button></li>
        <li><button>Mobile Banking</button></li>
        <li><button>FAQ</button></li>
        <li><button>Corparate Website</button></li>
        <li><button>SBI Pay Lite</button></li>
        <li><button>SB Collect</button></li>
        <li><button>Electrol Bond</button></li>
        <li><button>Videos</button></li>
        <li><button>mCash</button></li>
        <li><button>Apply for SBI/ Current Account</button></li>
        <li><button>NPS</button></li>
        <li><button>Bill Pay</button></li>
        <li><button>SBI Loans</button></li>
      </ul>
    </div>
  )
}
// login 
import React from "react";
import image from "../images/sbiyono.PNG";

export default function Login() {
  return (
    <div className="login">
      <div className="container-fluid" id="one">
        <div className="row">
          <div className="col-12">
            <p id="info"><span>If slowness is observed during Login page loadong, please reload the page for better experiance</span><br/>
            SBI Never ask for confidential information such as PIN or OTP from Customer. Any such call can be made by a fraudster. Please do not share personal info.</p>
          </div>
        </div>
      </div>
      <div className="login-div">
        <div className="login-cont">
            <div>
            <i class="bi bi-person-circle" style={{fontSize:"48px",color:"blue"}}></i>
            <h4><span style={{color:"blue"}}>PERSONAL</span> BANKING</h4>
            <button class="login-btn">LOGIN<i class="bi bi-chevron-double-right" ></i></button>
            </div>
            <div className="login-foot">
                <div className="login-foot-div"><i class="bi bi-person-bounding-box" style={{fontSize:"28px",color:"blue"}}></i>New User Registration</div>
                <div className="login-foot-div"><i class="bi bi-question-circle-fill" style={{fontSize:"28px",color:"Yellow"}}></i>How Do I</div>
                <div className="login-foot-div"><i class="bi bi-telephone-inbound-fill" style={{fontSize:"28px",color:"skyblue"}}></i>Customer Care</div>
                <div className="login-foot-div"><i class="bi bi-lock-fill" style={{fontSize:"28px",color:"green"}}></i>Lock & Unlock User</div>
            </div>
            <div className="login-para">
                <p>SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>
            </div>
        </div>
        <div className="login-cont">
            <div>
                <img src={image}></img>
                <h4><span style={{color:"blue"}}>CORPARATE</span> BANKING</h4>
                <select className="login-sel">
                   <option>yono BUSINESS</option>
                   <option>SARAL</option> 
                   <option>Corparate</option>
                   <option>Supply Chain Finance</option> 
                </select>
                <button class="login-btn">LOGIN</button>
                <div>
                <p>Have you tried our new simplified and intuitive business banking platform? Log in to yonobusiness.sbi to avail business banking services.</p>
                </div>
                <div className="login-foot">
                <div className="login-foot-div"><i class="bi bi-person-bounding-box" style={{fontSize:"28px",color:"blue"}}></i>New User Registration |</div>
                <div className="login-foot-div"><i class="bi bi-question-circle-fill" style={{fontSize:"28px",color:"Yellow"}}></i>How Do I</div>
                <div className="login-foot-div"><i class="bi bi-telephone-inbound-fill" style={{fontSize:"28px",color:"skyblue"}}></i>Customer Care</div>
                </div>
                <div>
                <p>Corporate Banking application to administer and manage non personal accounts online.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
// links 
import React from 'react'

export default function Links() {
  return (
    <div>
      <div className="container-fliud" className="links-div">
        <div className="row">
            <div className="col-3">
               <a>> RBI Retail Direct portal</a><br/><br/>
               <a>> Fair Lending Practice Code</a><br/><br/>
               <a>> NRI Services</a><br/><br/>
               <a>> SBI Express Remit</a><br/><br/>
            </div>
            <div className="col-3">
               <a>> RBI Retail Direct portal</a><br/><br/>
               <a>> Fair Lending Practice Code</a><br/><br/>
               <a>> NRI Services</a><br/><br/>
               <a>> SBI Express Remit</a><br/><br/>
            </div>
            <div className="col-3">
               <a>> RBI Retail Direct portal</a><br/><br/>
               <a>> Fair Lending Practice Code</a><br/><br/>
               <a>> NRI Services</a><br/><br/>
               <a>> SBI Express Remit</a><br/><br/>
            </div>
            <div className="col-3">
               <a>> RBI Retail Direct portal</a><br/><br/>
               <a>> Fair Lending Practice Code</a><br/><br/>
               <a>> NRI Services</a><br/><br/>
               <a>> SBI Express Remit</a><br/><br/>
            </div>
        </div>
        <div id="btn-div">
        <button id="link-btn"><i class="bi bi-caret-down-fill"></i> More Useful Links</button>
      </div>
      </div>
      
    </div>
  )
}


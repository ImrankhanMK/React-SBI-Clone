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
            <i className="bi bi-person-circle" style={{fontSize:"48px",color:"blue"}}></i>
            <h4><span style={{color:"blue"}}>PERSONAL</span> BANKING</h4>
            <button className="login-btn">LOGIN<i className="bi bi-chevron-double-right" ></i></button>
            </div>
            <div className="login-foot">
                <div className="login-foot-div"><i className="bi bi-person-bounding-box" style={{fontSize:"28px",color:"blue"}}></i>New User Registration</div>
                  
                <div className="login-foot-div"><i className="bi bi-question-circle-fill" style={{fontSize:"28px",color:"Yellow"}}></i>How Do I</div>
                <div className="login-foot-div"><i className="bi bi-telephone-inbound-fill" style={{fontSize:"28px",color:"skyblue"}}></i>Customer Care</div>
                <div className="login-foot-div"><i className="bi bi-lock-fill" style={{fontSize:"28px",color:"green"}}></i>Lock & Unlock User</div>
            </div>
            <div className="login-para">
                <p>SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>
            </div>
        </div>
        <div className="login-cont">
            <div>
                <img src={image}></img>
                <h4><span style={{color:"blue"}}>CORPORATE</span> BANKING</h4>
                <select className="login-sel">
                   <option>yono BUSINESS</option>
                   <option>SARAL</option> 
                   <option>Corparate</option>
                   <option>Supply Chain Finance</option> 
                </select>
                <button className="login-btn">LOGIN</button>
                <div id="login-para">
                <p >Have you tried our new simplified and intuitive business banking platform? Log in to yonobusiness.sbi to avail business banking services.</p>
                </div>
                <div className="login-foot">
                <div className="login-foot-div"><i className="bi bi-person-bounding-box" style={{fontSize:"28px",color:"blue"}}></i>New User Registration</div>
                <div className="login-foot-div"><i className="bi bi-question-circle-fill" style={{fontSize:"28px",color:"Yellow"}}></i>How Do I</div>
                <div className="login-foot-div"><i className="bi bi-telephone-inbound-fill" style={{fontSize:"28px",color:"skyblue"}}></i>Customer Care</div>
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

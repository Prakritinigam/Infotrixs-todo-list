import React ,{useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from './Components/sign.jpg';
import './login.css';
const Login = () => {
let history=useNavigate();
const [inpUserdata, setUserdata] = useState(
  {
    email: "",
    pass:"",
  }
);
const rev=async(e)=>
{
    history("/home",{state:{s_email:inpUserdata.email}})
    // console.log(s_email)
}

const setdata = (e) => {
  console.log(e.target.value)
  const { name, value } = e.target;
  setUserdata((preval) => {
      return {
          ...preval,
          [name]: value
      }})}  
const addinpdata=async(e)=>{
e.preventDefault();
const{email,pass}=inpUserdata
// Validate(getSupplierdata)
if(email===''|| pass==='')
{
  alert("Fill all the details")
}
else{
      const res = await fetch(`/userlogin`, {
          method: "POST",
          headers: {
              "Content-type": "application/JSON"
          },
          body:JSON.stringify({email,pass})
      });
      const userdata = await res.json();
      console.log(userdata); 
      if (userdata === "Logged In" || res.status===201){
       
        rev();
      }
      else {
      alert("Invalid Details")
        }}};

return (
    <>
    <center>
    <img src={login} alt="" height={720} className="img1" />
  </center>
  <form>
        <div class=" w3-panel login1">
          <p class="log2" style={{"color":"white"}} >Sign in</p>
          <div class="log3" >
              <i class='fas fa-user-circle user'style={{"color":"white"}} ></i>&nbsp;&nbsp;&nbsp;<label style={{"color":"white"}}>Email<sup >*</sup></label><br />
              <input class="log6" type="text" placeholder='Enter Email' value={inpUserdata.email} name="email" onChange={setdata}/><br/><br/>
              <i class='fas fa-key user' style={{"color":"white"}}/> &nbsp;<label style={{"color":"white"}}>Password<sup>*</sup></label><br/>
              <input class="log6" type="password"name="pass" placeholder='Enter Pasword' value={inpUserdata.pass} onChange={setdata} /><br/><br/>
              <input type="checkbox" />&nbsp;<span style={{"color":"white"}}>Remember me</span><br/>
              <button class="log4 w3-hover-shadow w3-green" onClick={addinpdata}>Signin</button>
             <Link to='/sign'><div class="log7 " style={{"color":"white"}}>Don't have an account?&nbsp;&nbsp;Sign up</div></Link> 

            {/* <hr class="rule"></hr><p class="rule1">OR</p><hr class="rule2"></hr>
            <div class="log8">sign in using</div>
            <div class="btn social"><i class="fa-brands fa-google fa-2x"></i></div>
            <div class="btn social">
            </div> */}
            </div>
      </div>
      </form>
</>
)
}


export default Login
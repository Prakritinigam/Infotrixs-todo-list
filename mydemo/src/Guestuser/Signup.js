import React, { useState } from 'react';
import sign from './Components/dark.jpg'
import './sign.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
//  document.body.style.background="blueviolet"
  
 let history=useNavigate('');
  const[inpval,setVal]=useState({
    name:"",
    email:"",
    pass:"", 
  })
   
  const setdata = (e) => {
    console.log(e.target.value);

    const { name, value } = e.target;
    setVal((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}
const addinpdata = async (e) => {
  e.preventDefault();
  const { name,email,pass} = inpval
  if (!name || !email || !pass ) {
      alert("Please enter all details ")
  }
  else {
      const res = await fetch("/useradd", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name,email,pass
          })
      }
      );
      const data = await res.json();
      console.log(data);
      if (!data || res.status === 404) {
          alert("Error");
          console.log(Error)
      }
      else {
          console.log("User added successfully")
         alert("Success! user added Successfully")
         history("/")

      }
  }
}
  
  return (
<>
<center>
    <img src={sign} alt="" height={720} className="img" />
  </center>
<center><h3 className='reg'>Register Now !!</h3></center>
<div className='up1'>
  <form>
    <input type='text' name="name" value={inpval.name} onChange={setdata}placeholder='Enter Your Name' className='signbox'/><br/><br/>
    <input type='email'name="email" value={inpval.email} onChange={setdata} placeholder='Enter Your Email' className='signbox'/><br/><br/>
    <input type='password'name="pass" value={inpval.pass} onChange={setdata} placeholder='Create Password' className='signbox'/><br/><br/><br/>
    <Link to='/'><div class="sign1 " style={{"color":"white"}}>Already have an account?&nbsp;&nbsp;Login</div></Link> <br/>
    <button type="submit" className='butsign w3-hover-shadow ' onClick={addinpdata}>Sign Up</button>
  </form>
</div>
</>
  )
}

export default Signup
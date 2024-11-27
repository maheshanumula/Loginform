import { useState } from "react";
import "./rangu.css"
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function Newlogin() {

    const [user, setUser] = useState("")
    const [password,setPassword]= useState("")
    
    const value ={user, password}

    const Userinform = async(e)=>{
       e.preventDefault()
      
       console.log(value)
    } 
    return ( 
        <div className="form">
        <form  onSubmit={Userinform}>
            <div className="form-a">
                <h1>Login</h1>

                <input type="text" placeholder="Username" name="user" onChange={(e)=>setUser(e.target.value)}/><span className="icon"><FaUserAlt /></span><br/>
                <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/><span className="icon"><FaLock /></span> 
                </div>
            <div className="form-b">
                <label><input type="checkbox"/> Remaber Me</label>
                <a href="#"> Forgot Password?</a>
            </div>
               <button className="buttonl" type="submit">Log in</button>
               <p>Don't have an account?<a href="#">Rigister</a> </p>
        </form>
     </div>
     );
}

export default Newlogin;
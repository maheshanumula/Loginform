
import "./fruit.css"


import { Link } from "react-router-dom";

const Login = () => { 
    return ( 
    <div className="banar">
        <img src="photos/ramu.jpg" />
        <b>NATURE!!!</b>
                <ul className="navbar">
                    <Link className="link">
                    <li>Home</li>
                    </Link>

                    <Link className="link">
                    <li>Menu</li>     
                    </Link>

                    <Link className="link">
                    <li>About it</li>
                    </Link>

                    <Link to= "/abcd" >
                    <li>Log in</li>
                    </Link>   
              </ul>
     </div>
     );
}
export default Login;
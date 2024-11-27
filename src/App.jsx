
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Login from "./Newformlogin/Login";

import Newlogin from "./Newformlogin/Newlogin";




const App = () => {
  return (  
   <div>

    <Login/>
    <Routes>
      <Route path="/abcd" element ={<Newlogin/>}/>
      
    </Routes>
    
   </div>
   
  );
}
 
export default App;
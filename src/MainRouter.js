import {Route , Switch} from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Core/HomePage";

const MainRouter  = () => (

    
         <div>
             <Switch>
                 <Route exact path="/" component={HomePage}/>
                 <Route exact path ="/login" component={Login}/>
             </Switch>
         </div>

    

)
export default MainRouter




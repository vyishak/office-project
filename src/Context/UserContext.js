
import axios from "axios";
import CreateDataContext from "./CreateDataContext";

const userReducer = (state , action) => {
    switch (action.type){
        case 'all_users' :
            return {...state , users : action.payload} ;
        case 'profile' : 
            return {...state , profile : action.payload} ;
        default :  
            return state;
    }

}

const login = (dispatch) => {
    return  (profile) => {
        dispatch({type: "profile", payload : profile})
    }  
}

const fetchUsers = (dispatch) => {
  return async ()=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({type : "all_users" , payload : response.data })

    } catch(e){
        console.log ("Got Error");
    }
  }
}
export const{Provider , Context} = CreateDataContext(
    userReducer , {fetchUsers , login}
)

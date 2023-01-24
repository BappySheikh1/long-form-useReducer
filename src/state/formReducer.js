import { actionType } from "./actionTypes";

export const initialState={
  firstName : "",
  lastName : "",
  email : "",
  gender : "",
  education :"",
  quantity : 0,
  feedback: "",
  term : false
};
export const reducer =(state,action)=>{
  switch(action.type){
    case actionType.INPUT :
      return {
        ...state,
      [action.payload.name] : action.payload.value,
      };
      case actionType.TOGGLE :
        return {
          ...state,
          term : !state.term
        }
      case actionType.DECREMENT :
        return {
          ...state,
          
        }
           
         
      case actionType.INCREMENT :
            return {
              ...state,
             
            }
      
    default :
    return state
  }

 
}
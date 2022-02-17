const initialState  = {
    userValue : [],
}

 export  const UserReducer = (state =initialState , action )=>{
     console.log("action",action);
     switch (action.type) {
         case "USER_DATA":
           return{
               ...state,
               userValue : [action.payload]
           }
           case "LOG_OUT":
               return{
                   ...state,
                   userValue : []
                }
                default: return state 
           
    }

}
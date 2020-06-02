//Specify how the application's state changes in response to actions sent to the store

//Create initial state
const initState = {
  authError: null
}

//Take the previous state + action, and return the next state
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        authError: null
      }
    default:
      return state
  }
};

export default authReducer;
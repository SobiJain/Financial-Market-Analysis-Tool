export const login = (token) => async(dispatch) =>{
    localStorage.setItem("token",token)
    dispatch({type:"USER_LOGIN"})
}

export const logout = () => async(dispatch) =>{
    localStorage.removeItem("token")
    dispatch({type:"USER_LOGOUT"})
}

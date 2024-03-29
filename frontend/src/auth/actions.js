export const login = (token, email) => async(dispatch) =>{
    localStorage.setItem("token",token)
    localStorage.setItem("email",email)
    dispatch({type:"USER_LOGIN"})
}

export const logout = () => async(dispatch) =>{
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    dispatch({type:"USER_LOGOUT"})
}

export const companyfound = (company) => async(dispatch) => {
    localStorage.setItem("company", company);
    dispatch({type:"COMPANY_FOUND"})
}
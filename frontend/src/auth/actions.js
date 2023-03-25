export const login = (token) => async(dispatch) =>{
    localStorage.setItem("token",token)
    dispatch({type:"USER_LOGIN"})
}

export const logout = () => async(dispatch) =>{
    localStorage.removeItem("token")
    dispatch({type:"USER_LOGOUT"})
}

export const companyfound = (company) => async(dispatch) => {
    localStorage.setItem("company", company)
    localStorage.setItem("state", 'true')
    dispatch({type:"COMPANY_FOUND"})
}
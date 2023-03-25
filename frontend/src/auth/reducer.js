const reducer =  (auth = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email'),
    company: localStorage.getItem('company'),
    state: localStorage.getItem('state')
},action) => {
switch (action.type) {
    case "USER_LOGIN":
        return {...auth,isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email'),
        company: localStorage.getItem('company'),
        state: localStorage.getItem('state')}

    case "USER_LOGOUT":
        return {...auth,isAuthenticated: false,
        token: localStorage.getItem('token'), 
        email: localStorage.getItem('email'),
        company: localStorage.getItem('company'),
        state: localStorage.getItem('state')}

    case "COMPANY_FOUND":
        return {...auth,isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'), 
        email: localStorage.getItem('email'),
        company: localStorage.getItem('company'),
        state: localStorage.getItem('state')}

    default:
        return auth
 }
}

export default reducer
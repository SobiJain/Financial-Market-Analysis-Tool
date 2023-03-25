const reducer =  (auth = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email')
},action) => {
switch (action.type) {
    case "USER_LOGIN":
        return {...auth,isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email')}

    case "USER_LOGOUT":
        return {...auth,isAuthenticated: false,
        token: localStorage.getItem('token'), 
        email: localStorage.getItem('email')}

    default:
        return auth
 }
}

export default reducer
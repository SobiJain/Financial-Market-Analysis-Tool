const reducer = (auth = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token')
}, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...auth, isAuthenticated: localStorage.getItem('token') ? true : false,
                token: localStorage.getItem('token')
            }

        case "USER_LOGOUT":
            return {
                ...auth, isAuthenticated: false,
                token: localStorage.getItem('token')
            }

        default:
            return auth
    }
}

export default reducer
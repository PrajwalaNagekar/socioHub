export const getToken=()=>localStorage.getItem('token')
export const isAuthenticated=()=>{
    const token=getToken()
    console.log("🚀 ~ isAuthenticated ~ token:", token)
    return !!token
}
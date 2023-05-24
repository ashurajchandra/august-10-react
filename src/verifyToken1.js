import jwt_decode from "jwt-decode";




export const checkingUserAuthentication = ()=>{
  const token = localStorage.getItem("token")?localStorage.getItem("token"):''
  const verifyToken = jwt_decode(token)
  console.log("verifyToken", verifyToken)
  if(verifyToken){
    return true
  }

  return false
}
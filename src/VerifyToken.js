
import jwt_decode from "jwt-decode";


export function isAuthenticated(){
 const token = localStorage.getItem("token");
 const decodeToken =token ? jwt_decode(token):null
 if(decodeToken){
    return true
 }
 return false
}
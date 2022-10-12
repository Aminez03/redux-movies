import { DELETE } from "./actionType"


export const hendelDelete=(id)=>{
    return{
        type:DELETE,payload:id
    }
}
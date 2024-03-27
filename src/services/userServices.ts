import axios from "axios" 

export const userServices = {    
    register: (formatRegisterValue:any)=> axios({
        method: 'POST',
        url: "http://localhost:3001/user/createUser",
        data: formatRegisterValue
    })
}  
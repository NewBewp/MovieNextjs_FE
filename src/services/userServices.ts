import { apiInstance } from "../constant/apiInstance"
import { LoginSchemaType } from "../schema/LoginSchema"
import { RegisterSchemaType } from "../schema/RegisterSchema"

const api = apiInstance({
    baseURL: process.env.NEXT_PUBLIC_USER_API
})

export const userServices = {
    register: (registerValue: RegisterSchemaType) => api.post("/register",registerValue),

    login: (loginValue: LoginSchemaType) => api.post("/login",loginValue),
}  
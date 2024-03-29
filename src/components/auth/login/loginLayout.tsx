"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/src/schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { userServices } from "@/src/services/userServices";
import { useRouter } from "next/navigation";
import { PATH } from "@/src/constant/config";
import { Input } from "@/src/ui/Input";

export const LoginLayout = () => {
    const { register : login, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(LoginSchema)
    })

    const router = useRouter()
    const onSubmit: SubmitHandler<LoginSchemaType> = async (loginValue) => {
        // console.log(loginValue);
        try {
            await userServices.login(loginValue)
            toast.success('Login success')
            router.push(PATH.home)
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <h1 className="text-3xl font-bold underline">Login Form</h1>
            <Input label= 'Email' id = 'email' type = 'email' register={login} error={errors.email?.message}/>
            <Input label="Password" id="password" type="password" register={login} error={errors.password?.message}/>
            <button type="submit">Login</button>
        </form>
    )
}
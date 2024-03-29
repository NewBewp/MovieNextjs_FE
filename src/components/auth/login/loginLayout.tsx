"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/src/schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { userServices } from "@/src/services/userServices";
import { useRouter } from "next/navigation";
import { PATH } from "@/src/constant/config";

export const LoginLayout = () => {
    const { register: login, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
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
            <div>
                <label htmlFor="email">Email : </label>
                <input
                    type="email"
                    id="email"
                    {...login('email')}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input
                    type="password"
                    id="password"
                    {...login('password')}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <button type="submit">Login</button>
        </form>
    )
}
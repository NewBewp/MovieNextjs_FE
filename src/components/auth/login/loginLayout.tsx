"use client";

import { LoginSchema, LoginSchemaType } from "@/src/schema/LoginSchema";
import { userServices } from "@/src/services/userServices";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const LoginLayout = () => {
    const { register: login, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(LoginSchema)
    })

    const onSubmit: SubmitHandler<LoginSchemaType> = async (loginValue) => {
        console.log(loginValue);
        try {
            await userServices.login(loginValue)
            toast.success('Login success')
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
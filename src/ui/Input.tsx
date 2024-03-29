import React, { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'

type InputPropertys = {
    label: string,
    id: string,
    type: HTMLInputTypeAttribute,
    register: UseFormRegister<any>,
    error?: string,
}

export const Input = ({label,id,type,register,error}:InputPropertys) => {
    return (
        <div>
            {<label htmlFor={id}>{label} : </label>}
            <input
                id={id}
                type={type}
            {...register(id)}
            />
            {!!error && <p className="text-red-500">{error}</p>}
        </div>
    )
}
"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "@/src/schema/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { userServices } from "@/src/services/userServices";
import { PATH } from "@/src/constant/config";
import { useRouter } from "next/navigation";
import { Input } from "@/src/ui/Input";
import { Select } from "@/src/ui/Select";

export const RegisterLayout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema)
  });

  const router = useRouter()

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (registerValue) => {
    console.log(registerValue);
    // Add logic to handle form submission here
    const formatRegisterValue: RegisterSchemaType = {
      ...registerValue,
      daybirth: new Date(registerValue.daybirth).toISOString(),
      // role_id: parseInt(registerValue.role_id)
    }

    try {
      await userServices.register(formatRegisterValue)
      toast.success('Register success');
      router.push(PATH.login)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold underline">Register Form</h1>
      <Input label="First Name" id="first_name" type="text" register={register} error={errors.first_name?.message}/>
      <Input label="Last Name" id="last_name" type="text" register={register} error={errors.last_name?.message}/>
      <Input label="Phone Number" id="phone_number" type="text" register={register} error={errors.phone_number?.message}/>
      <Input label="Email" id="email" type="email" register={register} error={errors.email?.message}/>
      <Input label="Address" id="address" type="text" register={register} error={errors.address?.message}/>
      <Select/>
      <Input label="Daybirth" id="daybirth" type="date" register={register} error={errors.daybirth?.message}/>
      <Input label="Password" id="password" type="password" register={register} error={errors.password?.message}/>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterLayout;
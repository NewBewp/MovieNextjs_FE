"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "@/src/schema/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { userServices } from "@/src/services/userServices";
import { PATH } from "@/src/constant/config";
import { useRouter } from "next/navigation";

export const RegisterLayout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema)
  });

  const router = useRouter()

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (registerValue) => {
    console.log(registerValue);
    // Add logic to handle form submission here
    const formatRegisterValue = {
      ...registerValue,
      daybirth: new Date(registerValue.daybirth).toISOString(),
      role_id: parseInt(registerValue.role_id)
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
      <div>
        <label htmlFor="first_name">First Name : </label>
        <input
          type="text"
          id="first_name"
          {...register('first_name')}
        />
        {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
      </div>

      <div>
        <label htmlFor="last_name">Last Name : </label>
        <input
          type="text"
          id="last_name"
          {...register("last_name")}
        />
        {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone_number">Phone Number : </label>
        <input
          type="text"
          id="phone_number"
          {...register("phone_number")}
        />
        {errors.phone_number && <p className="text-red-500">{errors.phone_number.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="address">Address : </label>
        <input
          type="text"
          id="address"
          {...register("address")}
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="gender">Gender : </label>
        <select id="gender" {...register("gender")}>
          <option value="">--Chọn giới tính--</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
      </div>

      <div>
        <label htmlFor="daybirth">Daybirth</label>
        <input
          type="date"
          id="daybirth"
          {...register("daybirth")}
        />
        {errors.daybirth && <p className="text-red-500">{errors.daybirth?.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterLayout;
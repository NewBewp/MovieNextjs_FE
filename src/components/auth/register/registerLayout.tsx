"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "@/src/schema/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";
//Toastify
import {toast}   from 'react-toastify';

const RegisterLayout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema)
  });


  const onSubmit: SubmitHandler<RegisterSchemaType> = async (RegisterValue) => {
    console.log(RegisterValue);
    // Add logic to handle form submission here
    // Ví dụ: Gửi dữ liệu tới một API server

    const formatRegisterValue = {
      ...RegisterValue,
      daybirth: new Date(RegisterValue.daybirth).toISOString(),
      role_id: parseInt(RegisterValue.role_id)
    }

    console.log(formatRegisterValue);

    try {
      await axios({
        method: 'POST',
        url: "http://localhost:3001/user/createUser",
        data: formatRegisterValue
      })
      toast.success('Register success')
      
    } catch (error) {

      let errorMessage = "An error occurred";
      errorMessage = error.message + error.code
      console.log(errorMessage)
      toast.error(errorMessage)
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

      <div>
        <label htmlFor="role_id">RoleId : </label>
        <select id="role_id" {...register("role_id")}>
          <option value="">--Chọn vai trò--</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>
        {errors.role_id && <p className="text-red-500">{errors?.role_id?.message}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterLayout;

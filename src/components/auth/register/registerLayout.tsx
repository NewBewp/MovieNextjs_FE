"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterLayout = () => {
  const { register, handleSubmit, formState : {errors} } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Add logic to handle form submission


  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register Form</h2>

      <div>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name"
          {...register("first_name")} />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" {...register("last_name", { required: 'Vui lòng nhập' })} />
      </div>

      <div>
        <label htmlFor="phone_number">Phone Number</label>
        <input type="text" id="phone_number" {...register("phone_number")} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" {...register("address")} />
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" >
          <option value="male" {...register("gender")}>male</option>
          <option value="female" {...register("gender")}>female</option>
        </select>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterLayout;

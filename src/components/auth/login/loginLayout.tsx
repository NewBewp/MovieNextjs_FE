"use client";

import React from "react";
export const LoginLayout = () => {
    return (
        <form>
            <h1 className="text-3xl font-bold underline">Login Form</h1>
            <div>
                <label htmlFor="email">Email : </label>
                <input
                    type="email"
                    id="email"
                />
            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input
                    type="password"
                    id="password"
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}
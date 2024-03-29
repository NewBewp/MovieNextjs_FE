import React from 'react'

type SelectPropertys = {
    label: string,
    id:string,
}

export const Select = ({}:SelectPropertys) => {
    return (
        <div>
            <label htmlFor="gender">Gender : </label>
            <select id="gender"
                // {...register("gender")}
            >
                <option value="">--Chọn giới tính--</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
            </select>
            {/* {errors.gender && <p className="text-red-500">{errors.gender.message}</p>} */}
        </div>
    )
}

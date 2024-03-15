import { z } from "zod";

export const RegisterSchema = z.object({
    first_name: z.string().min(6, 'Nhập ít nhất 6 ký tự').max(20, 'Nhập tối đa 20 ký tự'),
    last_name: z.string().min(6, 'Nhập ít nhất 6 ký tự'),
    phone_number: z.string().min(1, 'Vui lòng nhập số điện thoại').max(20, 'Nhập tối đa 20 ký tự'),
    email: z.string().min(1, 'Vui lòng nhập').email(),
    address: z.string().min(1, 'Vui lòng nhập'),
    gender: z.string().min(1, 'Vui lòng chọn').max(20, 'Nhập tối đa 20 ký tự'),
    password: z.string().min(1, 'Vui lòng chọn')
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
import { z } from "zod";

export const RegisterSchema = z.object({
    first_name: z.string().min(2, 'Nhập ít nhất 2 ký tự').max(20, 'Nhập tối đa 20 ký tự'),
    last_name: z.string().min(2, 'Nhập ít nhất 2 ký tự'),
    phone_number: z.string().min(1, 'Vui lòng nhập số điện thoại').max(20, 'Nhập tối đa 20 ký tự'),
    email: z.string().min(1, 'Vui lòng nhập').email(),
    address: z.string().min(1, 'Vui lòng nhập'),
    gender: z.string().min(1, 'Vui lòng chọn').max(20, 'Nhập tối đa 20 ký tự'),
    daybirth: z.string().min(1, 'Chon ngay sinh'),
    password: z.string().min(1, 'Nhap mat khau'),
    role_id: z.string().min(1, 'Chọn vai trò')
    
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
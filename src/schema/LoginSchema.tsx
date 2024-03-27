import {z} from "zod"

export const LoginSchema = z.object({
    email: z.string().min(1, 'Vui lòng nhập').email("Sai định dạng email"),
    password: z.string().min(1, 'Nhập mật khẩu'),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
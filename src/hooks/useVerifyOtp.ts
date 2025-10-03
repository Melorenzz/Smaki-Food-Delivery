import {useMutation} from "@tanstack/react-query";
import {AuthService} from "../services/auth.service.ts";

export const useVerifyOtp = () => {
    return useMutation({
        mutationKey: ['verifyOtp'],
        mutationFn: ({ phone, code }: { phone: string; code: string }) => AuthService.verifyOtp(phone, code),
    })
}
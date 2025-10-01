import {useMutation} from "@tanstack/react-query";
import {AuthService} from "../services/auth.service.ts";

export const useRequestOtp = () => {
    return useMutation({
        mutationKey: ['request otp'],
        mutationFn: AuthService.requestOtp
    })
}
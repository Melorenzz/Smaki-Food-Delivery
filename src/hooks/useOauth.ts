import {useMutation} from "@tanstack/react-query";
import {AuthService} from "../services/auth.service.ts";

export const useOauth = () => {
    return useMutation({
        mutationKey: ['oauth'],
        mutationFn: AuthService.oAuth
    })
}
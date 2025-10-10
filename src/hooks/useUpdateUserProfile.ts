import {useMutation} from "@tanstack/react-query";
import {UserService} from "../services/user.service.ts";

export const useUpdateUserProfile = () => {
    return useMutation({
        mutationKey: ['updateUserProfile'],
        mutationFn: (data: {firstName?: string; lastName?: string }) => UserService.updateUserProfile(data),
    })
}
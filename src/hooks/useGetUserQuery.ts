import {useQuery} from "@tanstack/react-query";
import {UserService} from "../services/user.service.ts";

export const useGetUserQuery = () => {
    return useQuery({
        queryKey: ['getUser'],
        queryFn: () => UserService.getUser()
    })
}
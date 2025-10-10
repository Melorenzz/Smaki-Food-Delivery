// export const profileService = {
//     getUserInfo: () => {
//
//     }
// }

import {axiosInstance} from "./api/innterceptor.ts";

export const UserService = {
    getUser: async () => {
        const res = await axiosInstance.get('users/get-user-info')
        return res.data
    },
    updateUserProfile: async (data: {firstName?: string; lastName?: string }) => {
        const res = await axiosInstance.post('users/update-user-profile', data)
        return res.data
    },
}
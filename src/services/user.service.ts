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

}
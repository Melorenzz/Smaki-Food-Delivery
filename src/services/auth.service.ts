    export const AuthService = {
        requestOtp: async (phone: string) => {
            return axiosInstance.post('/auth/otp', {phone})
        },
        oAuth: async (email) => {
            try {
                console.log('zdes')
                const res = await axiosInstance.post('/auth/oauth', email);
                console.log(res)
                return res;
            }catch(err) {
                console.log('tyt')
                console.log(err)
                throw err;
            }
        }
    }

    import {axiosInstance} from "./api/innterceptor.ts";

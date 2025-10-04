    export const AuthService = {
        requestOtp: async (phone: string) => {
            return axiosInstance.post('/auth/otp', {phone})
        },
        verifyOtp: async (phone: string, code: string) => {
            console.log("➡️ Отправка:", { phone, code });
            return axiosInstance.post('/auth/otp-verify', {phone, code})
        },
        oAuth: async (email: string) => {
            try {
                console.log('zdes')
                const res = await axiosInstance.post('/auth/oauth', email);
                console.log(res)
                return res;
            }catch(err) {
                console.log(err)
                throw err;
            }
        }
    }

    import {axiosInstance} from "./api/innterceptor.ts";

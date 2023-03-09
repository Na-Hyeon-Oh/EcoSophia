/* success, fail 메세지 가공 */
const util = {
    success: (status: number, message: string, data?: any) => {
        return {
            status,
            success: true,
            message,
            data,
        };
    },
    fail: (status: number, message: string, data?: any) => {
        return {
            status,
            success: false,
            message,
        };
    },
};

export default util;
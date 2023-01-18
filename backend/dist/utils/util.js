"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* success, fail 메세지 가공 */
const util = {
    success: (status, message, data) => {
        return {
            status,
            success: true,
            message,
            data,
        };
    },
    fail: (status, message, data) => {
        return {
            status,
            success: false,
            message,
        };
    },
};
exports.default = util;
//# sourceMappingURL=util.js.map
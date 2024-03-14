export default {
    userLogin(username, password) {
        return Promise.resolve({ code: 200, msg: "success", data: "xxxxxxxx" });
    },
    smsLogin(phone, vcode) {
        return Promise.resolve({ code: 200, msg: "success", data: "xxxxxxxx" });
    },
    sendLoginSms(phone) {
        return Promise.resolve({ code: 200, msg: "success" });
    },
    logout() {
        return Promise.resolve({ code: 200, msg: "success" });
    },
    getUserInfo() {
        return Promise.resolve({ code: 200, msg: "success", data: {} });
    },
};

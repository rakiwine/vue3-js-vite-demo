export const ApiGetUserInfo = function (userId, callback) {
    setTimeout(() => {
        // 模拟无错误
        const error = null;
        // 模拟获取的用户数据
        const userData = { id: userId, name: "John Doe" };

        callback(error, userData);
    }, 1000);
};

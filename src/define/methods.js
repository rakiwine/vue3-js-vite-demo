/**
 * 检测当前浏览器是否为 Internet Explorer。
 * @returns {boolean} 如果是 IE 浏览器，则返回 true；否则返回 false。
 */
export const detectIE = () => {
    // 检查全局 window 对象是否存在
    // 如果不存在，可能是在非浏览器环境中运行（如 Node.js）
    if (!window) return false;

    // 检查 window.navigator 对象是否存在
    // navigator 对象包含了浏览器的信息，如用户代理字符串
    if (!window.navigator) return false;

    // 检查 userAgent 属性是否存在于 navigator 对象中
    // userAgent 包含了浏览器的名称、版本和操作系统信息
    if (!window.navigator.userAgent) return false;

    // 获取用户代理字符串
    const ua = window.navigator.userAgent;

    // 检查用户代理字符串中是否包含 "MSIE" 或 "Trident/"
    // 这两个字符串是 IE 浏览器特有的标识
    // 如果找到这些字符串，说明用户正在使用 IE 浏览器
    return ua.indexOf("MSIE") > -1 || ua.indexOf("Trident/") > -1;
};

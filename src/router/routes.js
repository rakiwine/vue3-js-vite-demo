const globModules = import.meta.glob("./modules/**/*.js", { eager: true });
const constantModules = import.meta.glob("./constant/*.js", { eager: true });
const routes = [];

Object.entries({ ...globModules, ...constantModules } || {}).forEach(
    ([path, Module]) => {
        const route = Module.default;
        if (route) {
            if (Array.isArray(route)) {
                routes.push(...route);
            } else {
                routes.push(route);
            }
        } else {
            console.warn(`router:${path}未导出默认值`);
        }
    },
);

export default routes;

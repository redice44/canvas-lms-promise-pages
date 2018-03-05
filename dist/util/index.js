"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = () => {
    if (!process.env.CANVAS_TOKEN) {
        throw new Error(`Missing Token`);
    }
    if (!process.env.CANVAS_DOMAIN) {
        throw new Error(`Missing Canvas's Domain`);
    }
};
exports.pageToReq = (page) => ({
    title: page.title,
    body: page.body,
    editing_roles: page.editing_roles,
    notify_of_update: false,
    published: page.published,
    front_page: page.front_page
});
//# sourceMappingURL=index.js.map
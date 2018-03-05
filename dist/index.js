"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const delete_1 = require("./delete");
const frontPage_1 = require("./frontPage");
const get_1 = require("./get");
const list_1 = require("./list");
const update_1 = require("./update");
const util_1 = require("./util");
exports.create = (courseId, page) => {
    util_1.validate();
    return create_1.default(courseId, page);
};
exports.del = (courseId, page) => {
    util_1.validate();
    const pageUrl = typeof page === 'string' ? page : page.url;
    return delete_1.default(courseId, pageUrl);
};
exports.frontPage = (courseId) => {
    util_1.validate();
    return frontPage_1.default(courseId);
};
exports.get = (courseId, pageUrl) => {
    util_1.validate();
    return get_1.default(courseId, pageUrl);
};
exports.list = (courseId, opts = {}) => {
    util_1.validate();
    return list_1.default(courseId, opts);
};
exports.update = (courseId, page) => {
    util_1.validate();
    return update_1.default(courseId, page.url, util_1.pageToReq(page));
};
//# sourceMappingURL=index.js.map
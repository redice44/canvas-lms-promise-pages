"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const req = require("request-promise-native");
exports.default = (courseId, opts) => __awaiter(this, void 0, void 0, function* () {
    let uri = `${process.env.CANVAS_DOMAIN}api/v1/courses/${courseId}/pages`;
    const params = [];
    if (opts.sort) {
        params.push(`sort=${opts.sort}`);
    }
    if (opts.order) {
        params.push(`order=${opts.order}`);
    }
    if (opts.search_term) {
        params.push(`search_term=${opts.search_term}`);
    }
    if (opts.published !== undefined) {
        params.push(`published=${opts.published}`);
    }
    return req({
        method: 'GET',
        uri: `${uri}${params.length > 0 ? '?' + params.join('&') : ''}`,
        headers: {
            'Authorization': `Bearer ${process.env.CANVAS_TOKEN}`
        },
        json: true
    });
});
//# sourceMappingURL=list.js.map
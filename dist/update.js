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
exports.default = (courseId, pageUrl, page) => __awaiter(this, void 0, void 0, function* () {
    return req({
        method: 'PUT',
        uri: `${process.env.CANVAS_DOMAIN}api/v1/courses/${courseId}/pages/${pageUrl}`,
        headers: {
            'Authorization': `Bearer ${process.env.CANVAS_TOKEN}`
        },
        body: {
            wiki_page: page
        },
        json: true,
        resolveWithFullResponse: true
    });
});
//# sourceMappingURL=update.js.map
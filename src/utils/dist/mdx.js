"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAllMdxData = exports.getMdxData = exports.getMdxPaths = void 0;
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var node_process_1 = require("node:process");
var remark_frontmatter_1 = require("remark-frontmatter");
var remark_mdx_frontmatter_1 = require("remark-mdx-frontmatter");
var remark_gfm_1 = require("remark-gfm");
var string_width_1 = require("string-width");
var remark_extended_table_1 = require("remark-extended-table");
var remark_toc_1 = require("remark-toc");
var remark_emoji_1 = require("remark-emoji");
var remark_a11y_emoji_1 = require("@fec/remark-a11y-emoji");
var remark_breaks_1 = require("remark-breaks");
var remark_directive_1 = require("remark-directive");
var remark_remove_url_trailing_slash_1 = require("remark-remove-url-trailing-slash");
var remark_flexible_containers_1 = require("remark-flexible-containers");
var rehype_1 = require("@shikijs/rehype");
var transformers_1 = require("@shikijs/transformers");
var rsc_1 = require("next-mdx-remote/rsc");
var rehype_external_links_1 = require("rehype-external-links");
var rehype_slug_1 = require("rehype-slug");
var rehypePrune_mjs_1 = require("@/plugins/rehypePrune.mjs");
var mdx_1 = require("@/components/mdx");
var date_1 = require("@/utils/date");
var blogsDir = node_path_1.join(node_process_1.cwd(), 'docs');
function getMdxPaths() {
    return node_fs_1.readdirSync(blogsDir, {
        recursive: true
    }).filter(function (path) { return node_path_1.extname(path) === '.mdx'; });
}
exports.getMdxPaths = getMdxPaths;
function getMdxData(path) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, mdxContent, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    filePath = node_path_1.join(blogsDir, path);
                    mdxContent = node_fs_1.readFileSync(filePath, 'utf-8');
                    _a = [{ slug: node_path_1.basename(filePath, '.mdx') }];
                    return [4 /*yield*/, rsc_1.compileMDX({
                            source: mdxContent,
                            options: {
                                parseFrontmatter: true,
                                mdxOptions: {
                                    remarkPlugins: [
                                        remark_frontmatter_1["default"],
                                        remark_mdx_frontmatter_1["default"],
                                        [
                                            remark_gfm_1["default"],
                                            {
                                                stringWidth: string_width_1["default"],
                                                tableCellPadding: false
                                            },
                                        ],
                                        remark_extended_table_1["default"],
                                        [
                                            remark_flexible_containers_1["default"],
                                            {
                                                containerTagName: function (type) {
                                                    return type === 'details' ? 'details' : 'section';
                                                },
                                                containerClassName: 'post-banner',
                                                containerProperties: function (type) { return ({
                                                    'data-type': type
                                                }); },
                                                title: function (type, title) {
                                                    return (title === null || title === void 0 ? void 0 : title.trim()) ? title : type.toLocaleUpperCase();
                                                },
                                                titleTagName: function (type) {
                                                    return type === 'details' ? 'summary' : 'div';
                                                },
                                                titleClassName: 'post-banner__title'
                                            },
                                        ],
                                        remark_toc_1["default"],
                                        remark_emoji_1["default"],
                                        remark_a11y_emoji_1["default"],
                                        remark_breaks_1["default"],
                                        remark_directive_1["default"],
                                        remark_remove_url_trailing_slash_1["default"],
                                    ],
                                    rehypePlugins: [
                                        [
                                            rehype_1["default"],
                                            {
                                                themes: {
                                                    light: 'vitesse-light',
                                                    dark: 'vitesse-dark'
                                                },
                                                transformers: [
                                                    transformers_1.transformerMetaHighlight(),
                                                    transformers_1.transformerMetaWordHighlight(),
                                                    transformers_1.transformerNotationDiff(),
                                                    transformers_1.transformerNotationErrorLevel(),
                                                    transformers_1.transformerNotationFocus(),
                                                    transformers_1.transformerNotationHighlight(),
                                                    transformers_1.transformerNotationWordHighlight(),
                                                    transformers_1.transformerCompactLineOptions(),
                                                ],
                                                addLanguageClass: true
                                            },
                                        ],
                                        [
                                            rehype_external_links_1["default"],
                                            {
                                                rel: [''],
                                                target: '_blank'
                                            },
                                        ],
                                        rehype_slug_1["default"],
                                        rehypePrune_mjs_1.rehypePrune,
                                    ],
                                    format: 'mdx'
                                }
                            },
                            components: mdx_1.mdxComponents
                        })];
                case 1: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.sent())]))];
            }
        });
    });
}
exports.getMdxData = getMdxData;
function getAllMdxData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(getMdxPaths().map(function (path) { return getMdxData(path); }))];
                case 1: return [2 /*return*/, (_a.sent()).sort(function (a, b) {
                        return date_1.transformDateStringToTimestamp(a.frontmatter.lastUpdatedTime)
                            > date_1.transformDateStringToTimestamp(b.frontmatter.lastUpdatedTime)
                            ? -1
                            : 1;
                    })];
            }
        });
    });
}
exports.getAllMdxData = getAllMdxData;

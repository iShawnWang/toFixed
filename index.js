"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = exports.format = exports.toFixed = exports.isNumberLike = void 0;
const lodash_curry_1 = __importDefault(require("lodash.curry"));
/**
 * check if var can be converted to finite number
 * @param numlike Number or String
 * @returns Boolean
 */
const isNumberLike = (numlike) => {
    if (numlike === undefined || numlike === null) {
        return false;
    }
    const converted = Number(numlike);
    if (!Number.isFinite(converted)) {
        return false;
    }
    return true;
};
exports.isNumberLike = isNumberLike;
/**
 * toFixed, 并且不会保留末尾的 0
 * eg:
 * 1. 系统方法 : Number(3).toFixed(2) => "3.00"
 * 2. 该函数 : toFixed("3", 2) => "3"
 * @param num 需要被处理的数字/字符串
 * @param tofixed 保留小数位数
 * @param defaul num 不可转为 number 时, 默认返回值
 */
const toFixed = (num, tofixed, defaul = "") => {
    if (!(0, exports.isNumberLike)(num)) {
        return defaul;
    }
    return `${Number(Number(num).toFixed(tofixed))}`;
};
exports.toFixed = toFixed;
/**
 * 柯里化的基础函数, 可以创建自己的格式化函数
 * @param transformer 转换处理 : 乘以 1000 等
 * @param defaul num 为 null 或 undefined 默认返回值
 * @param toFixed 保留 x 位小数
 * @param num 需要被处理的数字
 */
exports.format = (0, lodash_curry_1.default)(
// 使用 lodash 的 curry, 保证函数的类型正确
(transformer, defaul, digits, num) => {
    if (!(0, exports.isNumberLike)(num)) {
        return defaul;
    }
    return digits === false
        ? transformer(num)
        : (0, exports.toFixed)(transformer(Number(num)), digits, defaul);
});
/**
 * Placeholder function
 * Always return first input param
 */
function identity(value) {
    return value;
}
exports.identity = identity;

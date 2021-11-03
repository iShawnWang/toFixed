import curry from "lodash.curry";

export type NumberLike = number | string;

/**
 * check if var can be converted to finite number
 * @param numlike Number or String
 * @returns Boolean
 */
export const isNumberLike = (numlike: NumberLike) => {
  if (numlike === undefined || numlike === null) {
    return false;
  }
  const converted = Number(numlike);
  if (!Number.isFinite(converted)) {
    return false;
  }
  return true;
};
/**
 * toFixed, 并且不会保留末尾的 0
 * eg:
 * 1. 系统方法 : Number(3).toFixed(2) => "3.00"
 * 2. 该函数 : toFixed("3", 2) => "3"
 * @param num 需要被处理的数字/字符串
 * @param tofixed 保留小数位数
 * @param defaul num 不可转为 number 时, 默认返回值
 */
export const toFixed = (
  num: NumberLike,
  tofixed: number,
  defaul: string = ""
) => {
  if (!isNumberLike(num)) {
    return defaul;
  }
  return `${Number(Number(num).toFixed(tofixed))}`;
};

/**
 * 柯里化的基础函数, 可以创建自己的格式化函数
 * @param transformer 转换处理 : 乘以 1000 等
 * @param defaul num 为 null 或 undefined 默认返回值
 * @param toFixed 保留 x 位小数
 * @param num 需要被处理的数字
 */
export const format = curry(
  // 使用 lodash 的 curry, 保证函数的类型正确
  (
    transformer: (v: NumberLike) => NumberLike,
    defaul: string,
    digits: number | boolean,
    num: NumberLike
  ) => {
    if (!isNumberLike(num)) {
      return defaul;
    }
    return digits === false
      ? transformer(num)
      : toFixed(transformer(Number(num)), digits as number, defaul);
  }
);

/**
 * Placeholder function
 * Always return first input param
 */
export function identity<T>(value: T) {
  return value;
}

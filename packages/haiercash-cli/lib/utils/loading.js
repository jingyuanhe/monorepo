'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.loading = void 0;
const ora_1 = __importDefault(require('ora'));
const chalk_1 = __importDefault(require('chalk'));
/**
 * 睡眠函数
 * @param {Number} delay 睡眠时间
 */
const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, delay);
  });
};
/**
 * 加载中方法
 * @param message - 提示信息
 * @param callback - 执行的回调
 * @param projectName - 项目名
 * @returns
 */
const loading = async (message, callback, other) => {
  const spinner = (0, ora_1.default)(message);
  spinner.start(); // 开启加载
  try {
    const res = await callback();
    // 加载成功
    spinner.succeed(`${chalk_1.default.black.bold('下载成功！执行以下命令打开并运行项目:')}
      \r\n  ${chalk_1.default.gray.bold(`cd ${other?.projectName}`)}
      \r\n  ${chalk_1.default.gray.bold('npm install')}
      \r\n  ${chalk_1.default.gray.bold('npm run dev')}
      \r\n  ${chalk_1.default.gray.bold('问题、意见、建议请反馈至：https://github.com/Redstone-1/xwg-cli/issues')}
      `);
    return res;
  } catch (error) {
    // 加载失败
    spinner.fail('请求失败，正在重试...');
    await sleep(1000);
    // 重新拉取
    return (0, exports.loading)(message, callback, other);
  }
};
exports.loading = loading;

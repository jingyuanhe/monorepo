'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const fs_extra_1 = __importDefault(require('fs-extra'));
const downloadRepo_1 = __importDefault(require('./downloadRepo'));
const askUser_1 = require('./askUser');
/**
 * 如果目录已经存在时调用
 * @param options - 命令参数
 * @param targetDirectory - 目标路径
 */
exports.default = async (options, projectName, targetDirectory) => {
  // 判断是否使用 --force 参数
  if (options.force) {
    // 删除重名目录
    await fs_extra_1.default.remove(targetDirectory);
    await (0, downloadRepo_1.default)(projectName, targetDirectory);
  } else {
    const isOverwrite = await (0, askUser_1.askOverwrite)();
    // 选择 Overwirte
    if (isOverwrite) {
      // 先删除掉原有重名目录
      await fs_extra_1.default.remove(targetDirectory);
      await (0, downloadRepo_1.default)(projectName, targetDirectory);
    }
  }
};

'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const path_1 = __importDefault(require('path'));
const fs_extra_1 = __importDefault(require('fs-extra'));
const dirExistCall_1 = __importDefault(require('./dirExistCall'));
const downloadRepo_1 = __importDefault(require('./downloadRepo'));
/**
 * 创建新项目
 * @param projectName - 项目名
 * @param options - 命令参数
 */
exports.default = async (projectName, options) => {
  // 获取当前工作目录
  const cwd = process.cwd();
  // 拼接得到项目目录
  const targetDirectory = path_1.default.join(cwd, projectName);
  // 判断目录是否存在
  if (fs_extra_1.default.existsSync(targetDirectory)) {
    await (0, dirExistCall_1.default)(options, projectName, targetDirectory);
  } else {
    await (0, downloadRepo_1.default)(projectName, targetDirectory);
  }
};

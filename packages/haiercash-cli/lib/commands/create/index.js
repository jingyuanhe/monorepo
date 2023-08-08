'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const commander_1 = require('commander');
const chalk_1 = __importDefault(require('chalk'));
const create_1 = __importDefault(require('./create'));
exports.default = () => {
  commander_1.program
    .command('create <project-name>') // 这里不能使用 chalk
    .description(chalk_1.default.cyan('创建新项目'))
    .option(
      '-f, --force',
      chalk_1.default.red(
        '如果目录已存在将覆盖原目录，请谨慎使用，这会先删除你已存在的项目再进行创建，可能会存在意外情况',
      ),
    )
    .action(create_1.default);
};

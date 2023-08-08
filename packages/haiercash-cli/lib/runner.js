'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const commander_1 = require('commander');
const chalk_1 = __importDefault(require('chalk'));
const commands_1 = require('./commands');
const const_1 = require('./const');
const runner = () => {
  commander_1.program.name(chalk_1.default.cyan('xwg')).usage(`${chalk_1.default.yellow('<command>')} [options]`);
  commander_1.program.version(`\r\n  ${chalk_1.default.cyan.bold(const_1.VERSION)}
    ${chalk_1.default.cyan.bold(const_1.BRAND_LOGO)}`);
  (0, commands_1.create)();
  commander_1.program.on('--help', function () {
    console.log(`\r\n终端执行 ${chalk_1.default.cyan.bold('xwg <command> --help')} 获取更多命令详情\r\n`);
  });
  commander_1.program.parse(process.argv);
};
exports.default = runner;

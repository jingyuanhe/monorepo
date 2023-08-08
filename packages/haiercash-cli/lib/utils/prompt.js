'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const inquirer_1 = __importDefault(require('inquirer'));
exports.default = async (prompts) => {
  return await new inquirer_1.default.prompt(prompts);
};

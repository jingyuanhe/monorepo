'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.askNeedUviewUI =
  exports.askVueVersion =
  exports.askIsAgreeCli =
  exports.askNeedTypeScript =
  exports.askCreateType =
  exports.askOverwrite =
    void 0;
const prompt_1 = __importDefault(require('../../utils/prompt'));
// ========== overwrite ==========
/** 询问要创建的项目类型 */
const askOverwrite = async () => {
  const { isOverwrite } = await (0, prompt_1.default)([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'isOverwrite',
      message: '原目录已经存在，请选择是否覆盖',
      choices: [
        { name: '覆盖', value: true },
        { name: '取消', value: false },
      ],
    },
  ]);
  return isOverwrite;
};
exports.askOverwrite = askOverwrite;
// ========== library ==========
/** 询问要创建的项目类型 */
const askCreateType = async () => {
  const { projectType } = await (0, prompt_1.default)([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'projectType',
      message: '请选择你要创建的项目类型',
      choices: [
        { name: 'vue', value: 'vue' },
        { name: 'react', value: 'react' },
        { name: 'uniapp', value: 'uniapp' },
        { name: 'koa', value: 'koa' },
        // { name: "nest", value: 'nest' },
        { name: 'library', value: 'library' },
      ],
    },
  ]);
  return projectType;
};
exports.askCreateType = askCreateType;
/** 询问是否需要 TypeScript */
const askNeedTypeScript = async () => {
  const { needTypeScript } = await (0, prompt_1.default)([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'needTypeScript',
      message: '是否需要 TypeScript ?',
      choices: [
        { name: '需要', value: true },
        { name: '不需要', value: false },
      ],
    },
  ]);
  return needTypeScript;
};
exports.askNeedTypeScript = askNeedTypeScript;
// ========== uniapp ==========
/** 询问是否采用 cli 创建的模板 */
const askIsAgreeCli = async () => {
  const { isAgreeCli } = await (0, prompt_1.default)([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'isAgreeCli',
      message: 'uniapp 模板采用 cli 创建，暂不提供由 HBuilderX 创建的模板。是否继续？',
      choices: [
        { name: '继续', value: true },
        { name: '退出', value: false },
      ],
    },
  ]);
  return isAgreeCli;
};
exports.askIsAgreeCli = askIsAgreeCli;
/** 询问使用的 vue 版本 */
const askVueVersion = async () => {
  const { vueVersion } = await (0, prompt_1.default)([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'vueVersion',
      message: '使用 vue2 还是 vue3 ?',
      choices: [
        { name: 'vue2', value: 2 },
        { name: 'vue3', value: 3 },
      ],
    },
  ]);
  return vueVersion;
};
exports.askVueVersion = askVueVersion;
/** 询问是否需要 uview-ui */
const askNeedUviewUI = async () => {
  const { needUviewUI } = await (0, prompt_1.default)([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'needUviewUI',
      message: '是否需要 uview-ui ?',
      choices: [
        { name: '需要', value: true },
        { name: '不需要', value: false },
      ],
    },
  ]);
  return needUviewUI;
};
exports.askNeedUviewUI = askNeedUviewUI;

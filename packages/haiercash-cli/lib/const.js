'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.repoURLTag =
  exports.downloadGitRepo =
  exports.getRepoURL =
  exports.VERSION =
  exports.BRAND_LOGO =
  exports.ROOT_DIR =
    void 0;
/**
 * 静态变量
 * @author xiwenge <1825744594@qq.com>
 * @create 2023/06/25
 */
const fs_extra_1 = __importDefault(require('fs-extra'));
const path_1 = __importDefault(require('path'));
const util_1 = __importDefault(require('util'));
const download_git_repo_1 = __importDefault(require('download-git-repo'));
/** 当前根目录 */
exports.ROOT_DIR = path_1.default.resolve(__dirname, '../');
const { version } = fs_extra_1.default.readJSONSync(path_1.default.resolve(exports.ROOT_DIR, 'package.json'));
/** https://tooltt.com/art-ascii/ font: ANSI Shadow */
exports.BRAND_LOGO = `
  ██╗  ██╗██╗    ██╗ ██████╗      ██████╗██╗     ██╗
  ╚██╗██╔╝██║    ██║██╔════╝     ██╔════╝██║     ██║
  ╚███╔╝ ██║ █╗ ██║██║  ███╗    ██║     ██║     ██║
  ██╔██╗ ██║███╗██║██║   ██║    ██║     ██║     ██║
  ██╔╝ ██╗╚███╔███╔╝╚██████╔╝    ╚██████╗███████╗██║
  ╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝      ╚═════╝╚══════╝╚═╝
`;
/** 当前版本号 */
exports.VERSION = version;
const getRepoURL = (tag) => {
  return `https://gitee.com/redstone-1/${tag}.git`;
};
exports.getRepoURL = getRepoURL;
exports.downloadGitRepo = util_1.default.promisify(download_git_repo_1.default);
exports.repoURLTag = {
  vueTemplate: 'vue-template',
  vueTemplateTypescript: 'vue-template-typescript',
  reactTemplate: 'react-template',
  reactTemplateTypescript: 'react-template-typescript',
  uniappVue2: 'uniapp-vue2',
  uniappVue2Uview: 'uniapp-vue2-uview',
  uniappVue3: 'uniapp-vue3',
  uniappVue3Typescript: 'uniapp-vue3-typescript',
  koa: 'koa',
  nest: 'nest',
  library: 'library',
  libraryTypescript: 'library-typescript',
};

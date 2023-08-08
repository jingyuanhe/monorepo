'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const chalk_1 = __importDefault(require('chalk'));
const askUser_1 = require('./askUser');
const downloadRepo_1 = require('../../utils/downloadRepo');
const const_1 = require('../../const');
/**
 * 下载 vue 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadVueTemplate = async (projectName, targetDirectory) => {
  let repoURL = '';
  const needTypeScript = await (0, askUser_1.askNeedTypeScript)();
  if (needTypeScript) {
    repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.vueTemplateTypescript);
  }
  if (!needTypeScript) {
    repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.vueTemplate);
  }
  await (0, downloadRepo_1.downloadRepo)({ repoURL: repoURL, projectName, targetDirectory });
};
/**
 * 下载 react 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadReactTemplate = async (projectName, targetDirectory) => {
  let repoURL = '';
  const needTypeScript = await (0, askUser_1.askNeedTypeScript)();
  if (needTypeScript) {
    repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.reactTemplateTypescript);
  }
  if (!needTypeScript) {
    repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.reactTemplate);
  }
  await (0, downloadRepo_1.downloadRepo)({ repoURL: repoURL, projectName, targetDirectory });
};
/**
 * 下载库模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadLibraryTemplate = async (projectName, targetDirectory) => {
  let repoURL = '';
  const needTypeScript = await (0, askUser_1.askNeedTypeScript)();
  if (needTypeScript) {
    repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.libraryTypescript);
  }
  if (!needTypeScript) {
    repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.library);
  }
  await (0, downloadRepo_1.downloadRepo)({ repoURL: repoURL, projectName, targetDirectory });
};
/**
 * 下载 uniapp 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadUniappTemplate = async (projectName, targetDirectory) => {
  const isAgreeCli = await (0, askUser_1.askIsAgreeCli)();
  if (!isAgreeCli) return;
  let repoURL = '';
  const vueVersion = await (0, askUser_1.askVueVersion)();
  if (vueVersion === 2) {
    const needUviewUI = await (0, askUser_1.askNeedUviewUI)();
    if (needUviewUI) {
      repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.uniappVue2Uview);
    }
    if (!needUviewUI) {
      repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.uniappVue2);
    }
  }
  if (vueVersion === 3) {
    const needTypeScript = await (0, askUser_1.askNeedTypeScript)();
    if (needTypeScript) {
      repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.uniappVue3Typescript);
    }
    if (!needTypeScript) {
      repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.uniappVue3);
    }
  }
  await (0, downloadRepo_1.downloadRepo)({ repoURL: repoURL, projectName, targetDirectory });
};
/**
 * 下载 koa 模板
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const downloadKoaTemplate = async (projectName, targetDirectory) => {
  const repoURL = (0, const_1.getRepoURL)(const_1.repoURLTag.koa);
  await (0, downloadRepo_1.downloadRepo)({ repoURL: repoURL, projectName, targetDirectory });
};
/**
 * 执行创建命令
 * @param projectType - 项目类型 "library" | "react" | "vue" | "uniapp" | "koa" | nest""
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const execCreate = async (projectType, projectName, targetDirectory) => {
  switch (projectType) {
    case 'library':
      await downloadLibraryTemplate(projectName, targetDirectory);
      break;
    case 'vue':
      await downloadVueTemplate(projectName, targetDirectory);
      break;
    case 'react':
      await downloadReactTemplate(projectName, targetDirectory);
      break;
    case 'uniapp':
      await downloadUniappTemplate(projectName, targetDirectory);
      break;
    case 'koa':
      await downloadKoaTemplate(projectName, targetDirectory);
      break;
    case 'nest':
      console.log(chalk_1.default.gray.bold(`\r\n  开发中，敬请期待...\r\n`));
      break;
  }
};
/**
 * 创建项目
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
exports.default = async (projectName, targetDirectory) => {
  console.log(
    chalk_1.default.red.bold(`\r\n  请注意：本 cli 下大部分模板采用 vite 构建，node 版本需要 14.18+ 或 16+ 或更高\r\n`),
  );
  const projectType = await (0, askUser_1.askCreateType)();
  await execCreate(projectType, projectName, targetDirectory);
};

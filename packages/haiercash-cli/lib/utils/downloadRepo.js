'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.downloadRepo = void 0;
const loading_1 = require('./loading');
const const_1 = require('../const');
/**
 * 下载仓库
 * @param repoURL - 仓库地址
 * @param targetDirectory - 目标存储路径
 * @param projectName - 项目名称
 */
const downloadRepo = async ({ repoURL, projectName, targetDirectory }) => {
  await (0, loading_1.loading)(
    '正在下载模板，请稍后...',
    () => (0, const_1.downloadGitRepo)(`direct:${repoURL}`, targetDirectory, { clone: true }),
    { projectName },
  );
};
exports.downloadRepo = downloadRepo;

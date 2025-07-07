#!/usr/bin/env node

const { generateGitConflictReport } = require('./index');

const [,, sourceDir, destDir, folderName] = process.argv;

if (!sourceDir || !destDir) {
    console.error("Usage: npx git-conflict-reporter <source-directory> <destination-directory> [folder-name]");
    process.exit(1);
}

generateGitConflictReport(sourceDir, destDir, folderName);

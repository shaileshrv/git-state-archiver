const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function generateGitConflictReport(sourceDirectory, destinationDirectory, folderName = 'git-report') {
    try {
        process.chdir(sourceDirectory);

        const destDir = path.join(destinationDirectory, folderName);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        const repoRoot = execSync('git rev-parse --show-toplevel').toString().trim();

        const conflictedFiles = execSync('git status --porcelain', { encoding: 'utf-8' })
            .split('\n')
            .filter(line => /^([AU]|DD|DU|UD|AA|UU)\s/.test(line))
            .map(line => line.replace(/^([AU]|DD|DU|UD|AA|UU)\s+/, ''));

        conflictedFiles.forEach(file => {
            const fullPath = path.join(repoRoot, file);
            const filename = file.replace(/[\/\\:]/g, "_");
            const destination = path.join(destDir, 'conflicted-files', filename);
            fs.mkdirSync(path.dirname(destination), { recursive: true });
            if (fs.existsSync(fullPath)) {
                fs.copyFileSync(fullPath, destination);
                console.log(`Copied: ${fullPath} -> ${destination}`);
            } else {
                console.error(`File not found: ${fullPath}`);
            }
        });

        const outputFile = path.join(destDir, 'git_report.txt');
        fs.writeFileSync(outputFile, '');

        const addSection = (title) => {
            fs.appendFileSync(outputFile, `\n===== ${title} =====\n`);
        };

        const appendGitOutput = (title, command) => {
            try {
                const output = execSync(command, { encoding: 'utf-8' });
                addSection(title);
                fs.appendFileSync(outputFile, output + "\n");
            } catch (error) {
                console.error(`Error fetching ${title}:`, error.message);
            }
        };

        fs.appendFileSync(outputFile, `Date and Time: ${new Date().toString()}\n`);
        fs.appendFileSync(outputFile, `User: ${process.env.USERNAME || process.env.USER}\n`);
        fs.appendFileSync(outputFile, `Computer Name: ${process.env.COMPUTERNAME}\n`);

        appendGitOutput("Source Branch Name", "git rev-parse --abbrev-ref HEAD");
        appendGitOutput("Conflicted Files", "git diff --name-status --diff-filter=U");
        appendGitOutput("Recent Commits", "git log -5 --oneline");
        appendGitOutput("Staged Files", "git diff --cached --name-status");
        appendGitOutput("Unstaged Files", "git diff --name-status");
        appendGitOutput("Untracked Files", "git ls-files --others --exclude-standard");
        appendGitOutput("Detailed Git Status", "git status --short --branch");

        console.log(`Git report has been saved to ${outputFile}`);
    } catch (error) {
        console.error("Error generating git conflict report:", error.message);
    }
}

module.exports = {
    generateGitConflictReport
};

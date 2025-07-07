# git-state-archiver

## Solving the Git Conflict Headache – Introducing git-state-archiver 🚀

## 👨‍💻 Have you ever been here?
You’re deep in the middle of a critical Git merge.
Multiple branches. Multiple contributors.
Suddenly, the dreaded conflicts appear.

Your terminal fills with:
CONFLICT (content): Merge conflict in src/app/main.js
CONFLICT (content): Merge conflict in src/utils/helper.js

You panic:
❌ Which files were conflicted?
❌ What exactly was the repo’s state when this happened?
❌ What if I lose these files while trying to fix them?

As developers, we’ve all been in that stressful moment where:
We rush to fix conflicts.
We lose track of what changed and where.
We forget to preserve the conflicted files for later analysis.

💡 That’s Why I Built git-state-archiver

I wanted a simple tool that:
📂 Automatically copies all conflicted files to a safe backup folder.
📝 Generates a detailed snapshot of the Git state.
✅ Helps me (and now you!) track, store, and revisit merge conflicts without losing anything.

🚀 What Does It Do?
✔️ Finds and backs up all conflicted files to a chosen path.
✔️ Captures your Git branch status, recent commits, and file changes in a detailed git_report.txt.
✔️ Saves you time and stress by preserving all the critical data, automatically.

## ⚙️ How to Use It?
Run directly with NPX (no install needed):
npx git-state-archiver <source-directory> <destination-directory> [folder-name]
Example:
npx git-state-archiver C:\MyRepo C:\Reports merge-snapshot

## 🙌 Why This Helps?
✅ Provides peace of mind during complex merges.
✅ Keeps a reliable archive of conflicted files.
✅ Improves your ability to debug or revisit Git issues later.
✅ Great for individual developers, QA teams, and code reviewers.

## 🔗 Check it out on NPM:
👉 https://lnkd.in/dXDbyGgD

## 🔹 Process Integration Summary:
You can integrate the git-state-archiver tool into your development workflow to:
📂 Automatically generate a Git status report and backup conflicted files during merges.
📎 Attach the report to the Jira task (or any project management tool) assigned to the developer.
✅ Include this step in your merge checklist for better traceability.

## ✅ Why This is Useful In Process:
Creates a documented proof of the Git state and conflicts at the time of merge.
Helps in process audits and RCA (Root Cause Analysis).
Can be used to show process improvement and build trust with the client.
Safeguards the developer/team from future blame related to merge issues.

## 👋 Let’s Connect!
If this sounds useful, try it out and let me know your feedback!
Happy to collaborate, enhance, or add new features based on your team’s needs.

Tag your teammates who’ve faced Git headaches before! 😅

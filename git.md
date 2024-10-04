## History Behind GIT
## Commands, What they do, and Examples:
| Command | Description | Example |
|---|---|---|
| `git init` | Initializes a new Git repository in the current directory | `git init` - Initializes a Git repository in the current directory, creating a `.git` folder |	
| `git clone` | Copies a repository from a remote server to your local machine | `git clone https://github.com/user/repo.git` - Clones a remote repository located at the URL to your local machine |	
| `git add` | Stages changes to be commited | `git add file.txt` - Stages `file.txt` for the next commit |	
| `git status` | Shows the status of your working directory, including staged, unstaged, and untracked files | `git status` - Shows modified, added, or deleted files |	
| `git commit` | Commits the staged changes with a descriptive message | `git commit -m 'Initial Commit'` - Commits the changes staged by `git add` with the message "Initial Commit" |	
| `git push` | Pushes the committed changes to a remote repository | `git push origin main` - Pushes the committed changes from the `main` branch to the remote repository `origin` |	
| `git pull` | Fetches and merges changes from a remote repository into your local branch | `git pull origin main` - Pulls and merges updates from the `main` branch |	
| `git branch` | Lists, creates, or deletes branches | `git branch tree-branch` - Creates a new branch called `tree-branch` |		
| `git checkout` | Switches to another branch or restores working files| `git checkout tree-branch` - Switches to `tree-branch` |	
| `git merge` | Merges changes from one branch into the current branch | `git merge tree-branch` - Merges `tree-branch` into the current branch |
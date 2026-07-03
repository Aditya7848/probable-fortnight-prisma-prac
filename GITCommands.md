1. Delete a local/remote branch in git
   1. First switch to another branch

      ```
      git checkout 'another-branch'
      ```

   2. This will only work if you have already merged your changes into another branch.

      ```
      git branch -b 'branch-name'
      ```

   3. If you want to delete it anyway and throw away unmerged changes, use the uppercase -D flag instead.

      ```
      git branch -D 'branch-name'
      ```

   4. Delete a remote branch

      ```
      git push origin --delete-branch-name
      ```

   5. cleanup obsolete local references

      ```
      git fetch --prune
      ```

2. if i made changes to git remote and commited them it is ahead of my local machine, how do you know git remote made changes in your git local ? git status giving me this branch is upto date with main
   -  ***git status only compares your local branch with your local copy of the remote branch. It does not contact GitHub.***
        ```
        git fetch
        git pull
        ```
3.

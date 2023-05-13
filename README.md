# .precommit-exec

## Description
Easy to use in any project, you can run the command before git commit to ensure code quality.

## How To Use
1. Place .precommit-exec **under the project root directory and git commit**.
2. Now all you need to do is have the people developing your project first run `cd .precommit-exec && yarn install` and you are ready to go.


## How To Use (Detail)
1. Place .precommit-exec **under the project root directory**
2. Modify **lint-staged.config.js** to replace the commands to run before precommit.
3. By default, eslint, prettier is included, but you can customize it to your liking.
4. git commit 
5. Now all you need to do is have the people developing your project first run `cd .precommit-exec && yarn install` and you are ready to go.

## Details
- lint-staged: https://github.com/okonet/lint-staged
- husky: https://github.com/typicode/husky

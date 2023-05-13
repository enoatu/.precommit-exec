# .precommit-exec

## Description
This script ensures code quality by running commands before git commit. It's easy to use and can be added to any project.

## Usage
1. Place .precommit-exec under the root directory of your project and commit the changes.
2. Ask developers to run `cd .precommit-exec && yarn install` before starting work on the project.

## Customization
1. Modify lint-staged.config.js to add or replace the commands to run before precommit.
2. By default, the script includes eslint and prettier, but you can customize it as per your project's needs.

## References
- lint-staged: https://github.com/okonet/lint-staged
- husky: https://github.com/typicode/husky

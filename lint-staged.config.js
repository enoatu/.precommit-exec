module.exports = {
  '../**/*.{js,ts,mjs,jsx,.tsx,.vue}': [
    (filenames) => `yarn eslint --fix --config .eslintrc.yml ${filenames.join(' ')}`,
    (filenames) => `yarn prettier --write --config .prettierrc.js ${filenames.join(' ')}`,
  ],
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat', 'refactor', 'build', 'test', 'docs']],
    'subject-case': [0]
  }
}

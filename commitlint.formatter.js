module.exports = (results = []) => {
  const errors = results.flatMap((result) =>
    result.errors.map((error) => `❌ ${error.message}`)
  );

  const output = [
    ...errors,
    '',
    '💡 Example of a valid commit message:',
    '   feat(api): add user login support',
    '',
    '👉 Allowed types: feat, fix, docs, chore, refactor, test, style, ci, perf, revert, build',
    '',
  ].join('\n');

  return output;
};

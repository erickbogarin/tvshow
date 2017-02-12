const path = require('path');
const exec = require('child_process').exec;
const del = require('del');
const chalk = require('chalk');
const Rsync = require('rsync');

const args = process.argv.slice(2);

if (!args[0]) {
  console.log(`Valid arguments:
  • publish (push to github)
  • deploy (build & publish)
  • docs (rebuild documentation)
  • update (if package.json has changed run \`npm update\`)
  • commits (has new remote commits)`
  );
}

if (args[0] === 'docs') {
  del(['./docs/*'])
    .then(() => {
      console.log(chalk.blue('Generating documentation...'));
      return exec('esdoc -c config/esdoc.json ');
    })
    .catch(err => {
      console.log(chalk.red('docs:del'), err);
    });
}

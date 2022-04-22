'use strict';

const yargs = require('yargs');

const commandParser = (args) => yargs(args)
  .option('name', {
    type: 'string',
    description: 'Name',
  })
  .demandOption('name')
  .help();

module.exports = {commandParser};

(require.main.filename === __filename) && (function() {
  const parsedCommand = commandParser(process.argv);
  const args = parsedCommand.argv;

  console.log(`Hello, ${args.name}, from beta`);
})();

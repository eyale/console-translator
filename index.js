const ConsoleTranslator = require('./lib');
const translator = ConsoleTranslator();

process.stdin.emit('data', translator);

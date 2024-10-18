import Calc from "./calculadora.js";
import {Calculadora, CalcCient} from "./calculadora.js";
import validator from "validator";
import chalk from 'chalk';
import {modifierNames, foregroundColorNames} from 'chalk';

console.log(Calc.somar(1,2));

console.log(Calculadora.subtrair(1,2));

console.log(CalcCient.potencia(3,2));

console.log(validator.isEmail('thiagocalado@netbiis.com'));

console.log(chalk.blue('Hello world!'));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));


console.log(modifierNames.includes('bold'));
console.log(foregroundColorNames.includes('pink'));

log(chalk.green('E O PIX???')+chalk.hex('#FAFAFA')('Nada ainda???')+chalk.underline.bgBlue('EIM???'));



log(chalk.underline.bgRed('=================FLAMENGO======================'));
log(chalk.underline.bgBlack('=================FLAMENGO======================'));
log(chalk.underline.bgRed('=================FLAMENGO======================'));
log(chalk.underline.bgBlack('=================FLAMENGO======================'));
log(chalk.underline.bgRed('=================FLAMENGO======================'));
log('');
log(chalk.underline.bgWhite('=================FLUMINENSE======================'));
log(chalk.underline.bgGreen('=================FLUMINENSE======================'));
log(chalk.underline.bgRed('=================FLUMINENSE======================'));
log(chalk.underline.bgGreen('=================FLUMINENSE======================'));
log(chalk.underline.bgWhite('=================FLUMINENSE======================'));


log(chalk.hex('#DEADED').strikethrough('REMO SÉRIE B'));

log(chalk.bgRgb(15, 100, 204).inverse('Hello!'));
log(chalk.hex('#FF8800').bold('Orange!'));


console.log(chalk.blue('       #######       '));
console.log(chalk.blue('     ###########     '));
console.log(chalk.blue('    #############    '));
console.log(chalk.blue('   ##') + chalk.white('  P S C   ') + chalk.blue('##   '));
console.log(chalk.blue('  ##') + chalk.white('           ') + chalk.blue('##  '));
console.log(chalk.blue(' ###') + chalk.white('   #####   ') + chalk.blue('### '));
console.log(chalk.blue(' ###') + chalk.white('  ##   ##  ') + chalk.blue('### '));
console.log(chalk.blue(' ###') + chalk.white('  ##   ##  ') + chalk.blue('### '));
console.log(chalk.blue('  ##') + chalk.white('   #####   ') + chalk.blue('##  '));
console.log(chalk.blue('   #############   '));
console.log(chalk.blue('    ###########    '));
console.log(chalk.blue('     #########     '));
console.log(chalk.blue('       #####       '));

log(chalk.bgAnsi256(194)('Honeydew, more or less'));

console.log(chalk.black.bgWhite('        (__)'));
console.log(chalk.black.bgWhite('        (oo)'));
console.log(chalk.black.bgWhite('  /------\\/'));
console.log(chalk.black.bgWhite(' / |    ||'));
console.log(chalk.black.bgWhite('*  /\\---/\\'));
console.log(chalk.black.bgWhite('   ~~   ~~'));

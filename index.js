
var chalk = require('chalk');
const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    console.log(chalk.red("                                                                                                  "));
    console.log(chalk.red("               `.--:.          ---..`    -::::::::::::::   `::::-`           .::::-               "));
    console.log(chalk.red("               oyyyy/          oyyyy/    oyyyyyyyyyyyyyo   .yyyyyo.        `:syyyyo               "));
    console.log(chalk.red("               syyyy/          oyyyy+    oyyyyo////////-   .yyyyyyy+`     -oyyyyyyo               "));
    console.log(chalk.red("               syyyy/          oyyyy+    oyyyy/            .yyyyyyyys:` .+yyyyyyyyo               "));
    console.log(chalk.red("               syyyy/          oyyyy+    oyyyy+````````    .yyyyysyyyyo/syyyysyyyyo               "));
    console.log(chalk.red("               syyyy/          oyyyy+    oyyyyysssssss+    .yyyyy./syyyyyyyo-/yyyyo               "));
    console.log(chalk.red("               syyyy/          oyyyy+    oyyyyysssssss:    .yyyyy` .+yyyys:` /yyyyo               "));
    console.log(chalk.red("               +yyyyo         `syyyy:    oyyyy/```````     .yyyyy`   -os+`   /yyyyo               "));
    console.log(chalk.red("               .syyyy+.`    `.oyyyyo`    oyyyy/            .yyyyy`    ``     /yyyyo               "));
    console.log(chalk.red("                .oyyyyyo+++osyyyyy+`     oyyyy/            .yyyyy`           /yyyyo               "));
    console.log(chalk.red("                  -osyyyyyyyyyys/.       oyyyy/            .yyyyy`           /yyyyo               "));
    console.log(chalk.red("                    `.://++/:-.          :////-             ..-::`           .::-.`               "));
    console.log(chalk.red("                                                                                                  "));
    console.log(chalk.red("                                 UNIVERSIDAD FRANCISCO MARROQUÍN                                  "));
    console.log(chalk.red("                                       MATEMÁTICA DISCRETA                                        "));
    console.log(chalk.white("                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                   "));
    console.log(chalk.blue("                                     JUAN DIEGO SIQUE MARTÍNEZ                                    "));
    console.log(chalk.green("                                   JOSÉ ALEJANDRO GUZMÁN ZAMORA                                   "));
    console.log(chalk.yellow("                                   JOSÉ ALEJANDRO MADRAZO ÁVILA                                   "));
    console.log(chalk.white("                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                   "));
    console.log(chalk.red("                                                                                                  "));
    let cmd = args._[0] || 'help'
  
    if (args.version || args.v) {
      cmd = 'version'
    }
  
    if (args.help || args.h) {
      cmd = 'help'
    }
  
    switch (cmd) {
      case 'lista':
        require('./fuente/lista')(args._[1])
        break
  
      case 'suma':
        require('./fuente/sumar')(args._[1])
        break
  
      case 'help':
        require('./fuente/help')(args)
        break
      case 'version':
        require('./fuente/version')(args)
        break
      default:
        console.error(`El comando "${cmd}", no existe. Recomendamos ver primero el menú de ayuda.`)
        break
    }
  }
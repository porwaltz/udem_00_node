const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        describe: 'muestra la tabla en consola',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'rango de la tabla',
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv

module.exports = argv
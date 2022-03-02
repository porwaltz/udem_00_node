const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try{
        let consola, archivo = ""
        for(let  i=1; i<=hasta; i++){
            consola += base + " " + colors.green("x ") + i + colors.green(" = ") + base*i + "\n"
            archivo += `${base} x ${i} = ${base * i}\n`
        }

        if(listar){
            console.log('============================='.green)
            console.log('Tabla del', colors.green(base))
            console.log('============================='.green)
            console.log(consola)
        }

        const nombreArchivo = 'tabla_del_' + base + '.txt'
        fs.writeFileSync(`./salida/${nombreArchivo}`, archivo)
        return nombreArchivo
        }
    catch(err){
        throw err
    }
}

module.exports = {
    crearArchivo
}
const chalk = require("chalk")
const rn = require("random-number")

const printDark = function(text) {
    //red, green, yellow, blue, magenta, cyan, white, gray, black
    var chooseDark = rn.generator({
        min: 1,
        max: 8,
        integer: true
    })
    var whatColorDark = chooseDark()
    if(whatColorDark === 1) {
        // colorDark = "red"
        console.log(chalk.red(text))
    }
    else if(whatColorDark === 2) {
        // colorDark = "blue"
        console.log(chalk.blue(text))
    }
    else if(whatColorDark === 3) {
        // colorDark = "green"
        console.log(chalk.green(text))
    }
    else if(whatColorDark === 4) {
        // colorDark = "yellow"
        console.log(chalk.yellow(text))
    }
    else if(whatColorDark === 5) {
        // colorDark = "magenta"
        console.log(chalk.magenta(text))
    }
    else if(whatColorDark === 6) {
        // colorDark = "cyan"
        console.log(chalk.cyan(text))
    }
    else if(whatColorDark === 7) {
        // colorDark = "white"
        console.log(chalk.white(text))
    }
    else if(whatColorDark === 8) {
        // colorDark = "gray"
        console.log(chalk.gray(text))
    }
}

const printBright = function(text) {
    //redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, grayBright, blackBright
    var chooseDark = rn.generator({
        min: 1,
        max: 7,
        integer: true
    })
    var whatColorDark = chooseDark()
    if(whatColorDark === 1) {
        // colorDark = "red"
        console.log(chalk.redBright(text))
    }
    else if(whatColorDark === 2) {
        // colorDark = "blue"
        console.log(chalk.blueBright(text))
    }
    else if(whatColorDark === 3) {
        // colorDark = "green"
        console.log(chalk.greenBright(text))
    }
    else if(whatColorDark === 4) {
        // colorDark = "yellow"
        console.log(chalk.yellowBright(text))
    }
    else if(whatColorDark === 5) {
        // colorDark = "magenta"
        console.log(chalk.magentaBright(text))
    }
    else if(whatColorDark === 6) {
        // colorDark = "cyan"
        console.log(chalk.cyanBright(text))
    }
    else if(whatColorDark === 7) {
        // colorDark = "white"
        console.log(chalk.whiteBright(text))
    }
}

const generateStyle = function() {
    //bold, dim, italic, underline, inverse, strikethrough
    var chooseStyle = rn.generator({
        min: 1,
        max: 6,
        integer: true
    })
    var style = null
    var whatStyle = chooseStyle()
    if(whatStyle === 1) {
        style = "bold"
        console.log(chalk.Bright(text))
    } else if(whatStyle === 2) {
        style = "dim"
    } else if(whatStyle === 3) {
        style = "italic"
    } else if(whatStyle === 4) {
        style = "underline"
    } else if (whatStyle === 5) {
        style = "inverse"
    } else if(whatStyle === 6) {
        style = "strikethrough"
    }
}
module.exports = {
    printBright,
    printDark,
    generateStyle
}
const chalk = require("chalk")
const rn = require("random-number")

const printDark = function(text) {
    //red, green, yellow, blue, magenta, cyan, white, gray, black
    var chooseDark = rn.generator({
        min: 1,
        max: 9,
        integer: true
    })
    var colorDark = null
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
    else if(whatColorDark === 9) {
        // colorDark = "black"
        console.log(chalk.red(text))
    }
    
}

const generateBright = function() {
    //redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, grayBright, blackBright
    var chooseDark = rn.generator({
        min: 1,
        max: 9,
        integer: true
    })
    var colorDark = null
    var whatColorDark = chooseDark()
    if(whatColorDark === 1) {colorDark = "red"}
    else if(whatColorDark === 2) {colorDark = "blue"}
    else if(whatColorDark === 3) {colorDark = "green"}
    else if(whatColorDark === 4) {colorDark = "yellow"}
    else if(whatColorDark === 5) {colorDark = "magenta"}
    else if(whatColorDark === 6) {colorDark = "cyan"}
    else if(whatColorDark === 7) {colorDark = "white"}
    else if(whatColorDark === 8) {colorDark = "gray"}
    else if(whatColorDark === 9) {colorDark = "black"}
    return colorDark
    return brightColors
}

const generateAll = function() {
    var allColors = [red, green, yellow, blue, magenta, cyan, white, gray, black, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, grayBright, blackBright]
    return allColors
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
    return style
}

module.exports = {
    generateBright,
    printDark,
    generateAll,
    generateStyle
}

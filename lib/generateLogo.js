function renderShape(shape) {

}

function renderTextColor() {

}

function renderBackgroundColor() {

}


function generateLogo(data) {
    return `# ${data.text}
    ${renderShape(data.shape)}
    `
}
module.exports = generateLogo;



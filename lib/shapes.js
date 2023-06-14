class Shapes {
   constructor() {
    this.color='';
    this.text='';
    this.textColor='';
   };

   setColor(color) {
    this.color = color
   };
    setText(text) {
        this.text = text
    };
    setTextColor(textColor) {
        this.textColor = textColor
    };
   
};
//classes inherites Shapes
class Square extends Shapes {
    render() {
        return `<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</svg>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</svg>`
    }
}

class Circle extends Shapes {
    render() {
        return `<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125"font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</svg>`
    }
}
module.exports = {
    Square, 
    Triangle, 
    Circle,
}
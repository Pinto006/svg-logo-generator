const {Circle, Square, Triangle} = require("./shapes")

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      let color =('blue')
      let textColor =('white')
      let text = ('')
      shape.setColor(color);
      shape.setText(text);
      shape.setTextColor(textColor);
      expect(shape.render()).toEqual(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</svg>`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        let color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        let color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });
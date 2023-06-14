const {Circle, Square, Triangle} = require("./shapes")

// Circle Shape
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    let color = ('blue')
    let textColor = ('white')
    let text = ('')
    shape.setColor(color);
    shape.setText(text);
    shape.setTextColor(textColor);
    expect(shape.render()).toEqual(`<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${color}"/><text x="150" y="125"font-size="60" text-anchor="middle" fill="${textColor}">${text}</svg>`);
  });
});
  // Square Shape
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    let color = ('black')
    let textColor = ('orange')
    let text = ('')
    shape.setColor(color);
    shape.setText(text);
    shape.setTextColor(textColor);
    expect(shape.render()).toEqual(`<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</svg>`);
  });
});
  // Triangle Shape
describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle();
    let color = ('pink')
    let textColor = ('green')
    let text = ('')
    shape.setColor(color);
    shape.setText(text);
    shape.setTextColor(textColor);
    expect(shape.render()).toEqual(`<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</svg>`);
  });
});
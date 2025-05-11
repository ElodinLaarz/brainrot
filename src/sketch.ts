import p5 from 'p5';

const sketch = (p: p5): void => {
  p.setup = (): void => {
    p.createCanvas(400, 400);
  };

  p.draw = (): void => {
    p.background(220);
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
  };
};

new p5(sketch); // Create an instance of p5
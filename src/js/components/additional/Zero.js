import * as PIXI from 'pixi.js';


export default function Zero() {
    const Graphics = PIXI.Graphics;

    const zero = new Graphics();
    zero.lineStyle(6);
    zero.drawCircle(50,50,44);

    return zero;
}

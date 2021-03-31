import * as PIXI from 'pixi.js';


export default function Cross() {
    const Graphics = PIXI.Graphics;

    const cross = new Graphics();
    cross.lineStyle(6);
    cross.moveTo(0,0);
    cross.lineTo(100,100);
    cross.moveTo(100,0);
    cross.lineTo(0,100);

    return cross;
}

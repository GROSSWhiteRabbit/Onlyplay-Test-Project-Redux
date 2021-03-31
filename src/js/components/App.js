
import * as PIXI from 'pixi.js';
import GameField from './GameField/GameField';
import InfoField from './InfoField/InfoField';

export default function App() {
    const app = new PIXI.Application({
        width : 900,
        height : 600,
        backgroundColor: 0xe9e9e9
    });

    app.stage.addChild(
        GameField(),
        InfoField()
    );
    return app;
}

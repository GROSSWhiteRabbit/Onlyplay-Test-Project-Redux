import * as PIXI from 'pixi.js';
import EndText from './EndText';
import PlayField from './PlayField/PlayField';


export default function GameField() {
    const Container = PIXI.Container;

    const gameField = new Container();
    gameField.x = 100;
    gameField.y = 100;



    const {winText, tieText} = EndText();
    gameField.addChild(
        PlayField(),
        winText,
        tieText
    );
    
    return gameField;
}

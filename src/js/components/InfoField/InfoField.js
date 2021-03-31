import * as PIXI from 'pixi.js';
import ActivePlayer from './ActivePlayer';
import ProgressContainer from './ProgressContainer';
import WinsContainer from './WinsContainer';
import ChoiceContainer from './ChoiceContainer';
import InfoAiContainer from './InfoAiContainer';


export default function InfoField() {
    const Container = PIXI.Container;

    
    const infoField = new Container();
    infoField.x = 500;
    infoField. y = 75;

    infoField.addChild(
        ActivePlayer(),
        ProgressContainer(),
        WinsContainer(),
        ChoiceContainer(),
        InfoAiContainer()
    );

    return infoField;
}
